import { Button } from "@/components/ui/button";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { NumberTicker } from "@/components/ui/number-ticker";
import Image from "next/image";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569?v=4",
    profileUrl: "https://github.com/username",
  },
  {
    imageUrl: "https://github.com/shadcn.png",
    profileUrl: "https://github.com/username",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/68136265?v=4",
    profileUrl: "https://github.com/username",
  },
];

export default function Hero() {
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col bg-blue-50 rounded-3xl p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">C</span>
            </div>
            <div className="text-xs text-gray-600">
              Medychnyy Avenue,
              <br />
              B-A, Lviv
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-600 text-xs">🔍</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-600 text-xs">≡</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-4 mb-2">
          Innovation <br />
          Clinic
          <span className="inline-block ml-1 w-4 h-4 rounded-full bg-blue-500"></span>
        </h1>

        <div className="flex justify-between my-6 text-blue-500">
          <div className="text-center">
            <div className="text-xl font-bold">10+</div>
            <div className="text-xs text-gray-600">
              years of
              <br />
              experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">20+</div>
            <div className="text-xs text-gray-600">
              highly qualified
              <br />
              doctors
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">100%</div>
            <div className="text-xs text-gray-600">
              digital
              <br />
              diagnostics
            </div>
          </div>
        </div>

        <div className="text-sm mb-4">
          We treat <span className="text-gray-400">not only symptoms</span> - we
          care <span className="text-gray-400">about each person.</span>
        </div>

        <div className="relative mt-4 bg-blue-500 rounded-3xl p-4 pt-16">
          <Image
            width={100}
            height={100}
            src="doctor.png"
            alt="Doctor"
            className="absolute -top-12 left-1/2 -translate-x-1/2 h-48 object-contain"
          />
          <div className="flex justify-center mt-16">
            <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6">
              Find Doctor
              <div className="ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <span className="text-blue-500 text-xs">👤</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex max-w-7xl mx-auto h-fit">
        <div className="w-full relative flex">
          <div className="w-1/2 py-12">
            <h1 className="text-7xl font-onest mt-10 text-clinic-accent ">
              Total <br />
              Surgicare
            </h1>
            <div className="text-sm ml-2 my-4 text-clinic-accent">
              We treat <span className="text-gray-400">not only symptoms</span>{" "}
              -<br />
              We care <span className="text-gray-400">about each person.</span>
            </div>

            <Button className="rounded-full bg-clinic-secondary hover:bg-clinic-secondaryDark text-primary-foreground px-6 mt-4">
              Book Appointment
            </Button>

            <div className="mt-16 flex items-center gap-4 bg-gray-50 rounded-xl p-4 w-3/5">
              <div className="w-full">
                <p className="text-xs text-gray-500 mb-2">
                  Results we are proud of
                </p>
                <div className="flex justify-between ">
                  <div>
                    <div className="flex items-center text-3xl font-semibold text-clinic-primary">
                      <NumberTicker
                        value={10}
                        decimalPlaces={0}
                        className="text-3xl font-semibold text-clinic-primary"
                      />
                      <span className="ml-1">+</span>
                    </div>
                    <div className="text-s text-gray-600">
                      years of
                      <br />
                      experience
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-3xl font-semibold text-clinic-primary">
                      <NumberTicker
                        value={20}
                        decimalPlaces={0}
                        className="text-3xl font-semibold text-clinic-primary"
                      />
                      <span className="ml-1">+</span>
                    </div>
                    <div className="text-s text-gray-600">
                      highly qualified
                      <br />
                      doctors
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center text-3xl font-semibold text-clinic-primary">
                      <NumberTicker
                        value={100}
                        decimalPlaces={0}
                        className="text-3xl font-semibold text-clinic-primary"
                      />
                      <span className="ml-1">%</span>
                    </div>
                    <div className="text-s text-gray-600">
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 scale-125">
            <Image
              width={100}
              height={100}
              src="doctor.png"
              alt="Doctor"
              className="object-contain"
            />
            <div className="absolute top-48 left-16 bg-gray-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-clinic-accent">
              Reliability
            </div>

            <div className="absolute top-44 right-24 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-clinic-accent">
              Experience
            </div>

            <div className="absolute bottom-44 right-12 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-clinic-accent">
              Professional
            </div>
          </div>

          <div className="w-1/2 relative ">
            <div className="absolute top-44 right-28 h-16 w-16 rounded-lg bg-clinic-secondary z-10"></div>
            <div className="absolute top-72 right-32 h-20 w-20 rounded-lg bg-clinic-secondary z-10"></div>
            <div className="absolute top-52 right-10 h-28 w-28 rounded-2xl bg-white/20 z-10"></div>
            <div className="bg-clinic-primary rounded-3xl h-full w-full overflow-hidden relative ">
              <div className="absolute top-20 left-28 text-white ">
                <h2 className="text-4xl font-onest">
                  With Advanced Technologies
                </h2>
                <p className="text-sm mt-2 opacity-80 max-w-sm">
                  The latest generation equipment, digital diagnostics, advanced
                  techniques – all of this works for your health.
                </p>
              </div>

              <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-xs text-white max-w-[250px]">
                <p>
                  We appreciate every feedback, because it helps us to become
                  better.
                </p>
                <div className="flex mt-2">
                  {/* <div className="h-6 w-6 rounded-full bg-gray-300 -mr-1"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-300 -mr-1"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-300"></div> */}

                  <AvatarCircles numPeople={99} avatarUrls={avatars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
