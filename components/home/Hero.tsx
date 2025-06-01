import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop View */}
      <div className="flex max-w-7xl mx-auto">
        <div className="w-full relative flex flex-col lg:flex-row">
          {/* left side title */}
          <div className="w-full lg:w-1/2 p-5 lg:py-12 max-lg:text-center">
            <h1 className="text-5xl md:text-7xl font-onest mt-2 sm:mt-3 md:mt-7 lg:mt-10 text-clinic-accent ">
              Total <br />
              Surgicare
            </h1>
            <div className="text-sm ml-2 my-4 text-clinic-accent max-lg:hidden">
              We treat <span className="text-gray-400">not only symptoms</span>{" "}
              -<br />
              We care <span className="text-gray-400">about each person.</span>
            </div>
            <Link href="/contact">
              <Button className="rounded-full bg-clinic-secondary hover:bg-clinic-secondaryDark text-primary-foreground px-6 mt-4">
                Book Appointment
              </Button>
            </Link>

            <div className="mt-5 lg:mt-16 flex items-center md:gap-4 gap-6 bg-gray-50 rounded-xl p-4 w-full md:w-3/5 lg:w-3/5 max-lg:mx-auto">
              <div className="w-full">
                <p className="text-xs text-gray-500 mb-2">
                  Results we are proud of
                </p>
                <div className="flex justify-evenly lg:justify-between gap-3">
                  <div className="flex flex-col max-lg:items-center justify-center">
                    <div className="flex items-center font-semibold text-clinic-primary">
                      <NumberTicker
                        value={10}
                        decimalPlaces={0}
                        className="text-2xl lg:text-3xl font-semibold text-clinic-primary"
                      />
                      <span className="ml-1">+</span>
                    </div>
                    <div className="text-xs md:text-base text-gray-600">
                      years of
                      <br />
                      experience
                    </div>
                  </div>
                  <div className="flex flex-col max-lg:items-center justify-center">
                    <div className="flex items-center text-3xl font-semibold text-clinic-primary">
                      <NumberTicker
                        value={20}
                        decimalPlaces={0}
                        className="text-2xl lg:text-3xl font-semibold text-clinic-primary"
                      />
                      <span className="ml-1">+</span>
                    </div>
                    <div className="text-xs md:text-base text-gray-600">
                      highly qualified
                      <br />
                      doctors
                    </div>
                  </div>

                  <div className="flex flex-col max-lg:items-center justify-center">
                    <div className="flex items-center text-3xl font-semibold text-clinic-primary">
                      <NumberTicker
                        value={100}
                        decimalPlaces={0}
                        className="text-2xl lg:text-3xl font-semibold text-clinic-primary"
                      />
                      <span className="ml-1">%</span>
                    </div>
                    <div className="text-xs md:text-base text-gray-600">
                      digital
                      <br />
                      diagnostics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* doctor image and floating text */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[380px] sm:w-[380px] md:w-[380px] lg:w-[550px] h-auto">
            <Image
              src="/doctor3.png"
              alt="Doctor"
              width={550}
              height={100}
              className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-auto"
            />

            <div className="absolute top-40 sm:top-40 lg:top-48 left-4 sm:left-6 lg:left-16 bg-gray-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm text-clinic-accent">
              Reliability
            </div>

            <div className="absolute top-28 sm:top-40 lg:top-44 right-4 sm:right-10 lg:right-24 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm text-clinic-accent">
              Experience
            </div>

            <div className="absolute bottom-24 sm:bottom-32 md:bottom-28 lg:bottom-36 right-2 sm:right-8 md:right-0 lg:right-12 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm text-clinic-accent">
              Professional
            </div>
          </div>

          {/* right the blue block */}
          <div className="h-full w-full lg:w-1/2 relative  flex items-center justify-center max-lg:bg-clinic-background">
            <div className="hidden lg:block absolute top-48 right-28 h-16 w-16 rounded-lg bg-clinic-secondary z-10"></div>
            <div className="hidden lg:block absolute top-80 right-32 h-20 w-20 rounded-lg bg-clinic-secondary z-10"></div>
            <div className="hidden lg:block absolute top-56 right-10 h-28 w-28 rounded-2xl bg-white/20 z-10"></div>
            <div className="w-1/2 lg:hidden h-full p-5 md:p-10">
              <div className="text-sm my-4 text-clinic-accent w-2/3">
                We treat{" "}
                <span className="text-gray-400">not only symptoms</span> -<br />
                We care{" "}
                <span className="text-gray-400">about each person.</span>
              </div>
            </div>
            <div className="bg-clinic-primary rounded-l-3xl lg:rounded-3xl h-full w-1/2 lg:w-full overflow-hidden relative flex flex-col justify-between gap-10 p-5 md:py-10 md:pl-20 lg:p-20 min-h-96">
              <div className="text-white hidden md:block text-right lg:text-left">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-onest">
                  With Advanced Technologies
                </h2>
                <p className="text-sm mt-2 opacity-80 max-w-sm">
                  The latest generation equipment, digital diagnostics, advanced
                  techniques – all of this works for your health.
                </p>
              </div>

              <div className="justify-end hidden lg:flex">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 py-6 text-xs text-center text-white max-w-[250px] items-end">
                  <p>
                    We appreciate every feedback, because it helps us to become
                    better.
                  </p>
                  {/* <div className="flex mt-2">
                    <AvatarCircles numPeople={99} avatarUrls={avatars} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
