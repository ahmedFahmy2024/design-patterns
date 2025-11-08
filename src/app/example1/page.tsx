import Counter from "./_components/Counter";
import DarkModeToggle from "./_components/DarkModeToggle";
import UserForm from "./_components/UserForm";

export default function Example1() {
  return (
    <div className="container mx-auto flex flex-col gap-6 items-center justify-center ">
      <h1 className="text-2xl font-bold">Example 1</h1>
      <Counter />
      <UserForm />
      <DarkModeToggle />
    </div>
  );
}
