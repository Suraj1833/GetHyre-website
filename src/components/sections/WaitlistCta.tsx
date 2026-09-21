import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WaitlistForm } from "@/components/sections/WaitlistForm";

export function WaitlistCta({
  title = "Find out where you stand before the next application.",
  body = "GetHyre is in private beta. Join the waitlist and we'll send your invite as seats open up.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col items-center">
              <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80">{body}</p>
              <div className="mt-8 flex w-full justify-center">
                <WaitlistForm variant="dark" source="inline-cta" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
