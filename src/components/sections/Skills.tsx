import { marqueeSkills, skillCategories } from '@/content'
import { Reveal, Stagger } from '../reveal'
import { SectionHeading } from '../section-heading'

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading index="02" title="Skills" subtitle="The tools I reach for to design and ship products." />
      </div>

      {/* Marquee */}
      <Reveal className="mb-12">
        <div className="relative overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => {
              const Icon = skill.icon
              return (
                <div
                  key={`${skill.name}-${i}`}
                  className="flex items-center gap-2 rounded-xl glass px-4 py-2.5"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* Categorized grid */}
      <div className="container">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {skillCategories.map((category) => (
            <Reveal key={category.title}>
              <div className="h-full rounded-2xl glass p-6 border-gradient transition-transform duration-300 hover:-translate-y-1">
                <h3 className="mb-4 font-display text-base font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <span
                        key={skill.name}
                        className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground"
                      >
                        <Icon
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                        {skill.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
