import LoginCard from "@/components/loginCard";

export default function Login() {
  return (
    <>
      <div className="h-[100dvh] w-full">
        <div className="flex flex-wrap justify-center h-full items-center gap-6">
          <LoginCard />
        </div>
      </div>
    </>
  );
}