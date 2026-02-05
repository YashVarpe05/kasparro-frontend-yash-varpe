import { pipelineSteps } from "@/data/home";

export function TimelineSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Simple Process
          </p>
          <h2 className="text-4xl font-bold mb-4">
            From Setup to Insights in Minutes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Four steps. Zero complexity. Full AI visibility.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-violet-500/0 via-violet-500/50 to-violet-500/0" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className={`relative md:flex md:items-center md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <div
                    className={`inline-block p-6 rounded-2xl border bg-card ${
                      idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <span className="text-xs font-semibold text-violet-500 tracking-widest uppercase">
                      {step.label}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-violet-500/10 border-2 border-violet-500/30 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-background border-2 border-violet-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-violet-500">
                        {idx + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile step indicator */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm font-bold text-violet-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
