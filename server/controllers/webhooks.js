import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
    try {
        console.log("🔹 Received Webhook:", req.body);
        console.log("🔹 Headers:", req.headers);

        // Create a Svix instance with Clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Verifying Headers (No Bypass)
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        console.log("✅ Webhook verified successfully!");

        // Getting Data from request body
        const { data, type } = req.body;

        console.log("🔹 Webhook Type:", type);

        // Switch Cases for different Events
        switch (type) {
            case "user.created":
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.image_url,
                    resume: ""
                };

                console.log("🟢 Creating user:", userData);
                await User.create(userData);
                res.json({ success: true, message: "User created" });
                break;

            case "user.updated":
                const updateData = {
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.image_url
                };

                console.log("🟡 Updating user:", updateData);
                await User.findByIdAndUpdate(data.id, updateData);
                res.json({ success: true, message: "User updated" });
                break;

            case "user.deleted":
                console.log("🔴 Deleting user with ID:", data.id);
                await User.findByIdAndDelete(data.id);
                res.json({ success: true, message: "User deleted" });
                break;

            default:
                console.log("❌ Unknown webhook type:", type);
                res.status(400).json({ success: false, message: "Invalid webhook event type" });
                break;
        }
    } catch (error) {
        console.error("❌ Webhook error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
