// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node"

Sentry.init({
  dsn: "https://2115dac0f81d8e15d3fee740eaaf9f60@o4508828996534272.ingest.us.sentry.io/4508828999483392",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  // Tracing
  //tracesSampleRate: 1.0, //  Capture 100% of the transactions
});
// Manually call startProfiler and stopProfiler
// to profile the code in between
Sentry.profiler.startProfiler();

// Starts a transaction that will also be profiled
Sentry.startSpan({
  name: "My First Transaction",
}, () => {
  // the code executing inside the transaction will be wrapped in a span and profiled
});

// Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling
// your application until the process exits or stopProfiling is called.
Sentry.profiler.stopProfiler();