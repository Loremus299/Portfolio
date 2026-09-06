import Codeblock from "@/components/codeblock";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full max-w-2xl grid gap-6 p-4 pt-36 text-lg pb-36">
      <p className="text-sm -mb-2">28 Aug 2026.</p>
      <div className="grid gap-1">
        <h1 className="text-2xl text-neutral-100 font-semibold tracking-tight">
          Result Enum alike in Typescript.
        </h1>
        <p className="text-sm">
          Because life is too short to try catch every async function.
        </p>
      </div>
      <div className="mt-4 grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">Why ?</h2>
        <p>
          I got the idea to implement this from the{" "}
          <Link
            href={"https://doc.rust-lang.org/std/result/enum.Result.html"}
            target="_blank"
            className="underline"
          >
            Result Enum from Rust.
          </Link>{" "}
          It allows you properly handle side effects of your code. Typescript
          has a habit of doing using try/catch but it is heavily associated with
          &quot;async functions&quot; and not managing side effects.
        </p>
      </div>
      <div className="mt-4 grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">
          Implementation Details.
        </h2>
        <p>
          Typescript doesn&apos;t work the same way as Rust (unfortunately) so I
          couldn&apos;t make Result here as an Enum or an Interface, I had to
          utilize classes and type system. <br /> <br />I implemented Result as
          a type to allow for type narrowing, using it in class to define
          methods on it. Type narrowing was crucial to avoid accessing error or
          data without confirming success.
        </p>
      </div>
      <div className="grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">
          Type Narrowing & ResultType.
        </h2>
        <div className="grid gap-2">
          <p>
            Type Narrowing is a method to refine the type of data from a broader
            one to a specific one.
          </p>
          <Codeblock lang="typescript">{`export type ResultType<T, E> = |
  | { success: true; data: T } 
  | { success: false; error: E };`}</Codeblock>
          <p>
            The result value either being data or error depending on the value
            of success allows typescript to enforce that success value must be
            checked before accessing data or error, preventing direct and
            dangerous access. You can directly wrap this type in a class and
            define methods to use it in your code.
          </p>
          <Codeblock lang="typescript">{`export class Result<T, E> { 
  public readonly value: ResultType<T, E>; 
  ..... 
}`}</Codeblock>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">
          Important Static Methods.
        </h2>
        <div className="grid gap-2">
          <p>
            <b>1. TryCatch</b> <br /> Since Javascript allows you to throw
            anything and catch block types it as unknown. Result.tryCatch wraps
            a try those async calls into a clean {`Result<T, unknown>`} type.
          </p>
          <Codeblock lang="typescript">{`const data: Result<Response, unknown> = await Result.tryCatch(
  {}, 
  async() => await fetch('https://www.loremus.gay')
)`}</Codeblock>
          <p>is equivalent to</p>
          <Codeblock lang="typescript">{`async function query(): Promise<Result<Response, unknown>> {
  try {
    const q = await fetch('https://www.loremus.gay');
    return Result.ok(q) 
  } catch(error) {
    return Result.error(error)
  }
}

const data = await query();`}</Codeblock>
          <p>
            <b>2. Fallback</b> <br /> is a method that takes in functions with
            same arguments and return result. It runs one method after another
            in the array and returns the first one that succeeds, if all fails,
            it returns default error.
          </p>
          <Codeblock lang="typescript">{`const data: Result<UserData, string> = Result.fallback(
  {id: "userId"}, 
  "all ways to fetch data failed", 
  [fetchFromCache, fetchFromDb1, fetchFromDb2]
)`}</Codeblock>
          <p>
            <b>3. Settle</b> <br />
            is a method that takes in a an array of Promised Results, awaits
            them and makes sure they are all successful, and returns the
            successful data as a tuple. If even one of them fails, it returns
            null.
          </p>
          <Codeblock lang="typescript">{`const data: Result<[string, number], null> = Result.settle([
  returnsStringResultPromise(), 
  returnsNumberResultPromise()
])`}</Codeblock>
        </div>
        <div className="mt-4 grid gap-2">
          <h2 className="text-neutral-100 tracking-tight text-xl">
            Method Chaining.
          </h2>
          <p>
            1. mapOk() = Transform data if Result is successful.
            <br />
            2. mapError() = Transforms the error message if it failed.
            <br />
            3. match() = Takes in 2 function, one runs if failed, another runs
            if succeeded. Both transform results. <br />
            4. onOk() = Runs the function if result is successful but
            doesn&apos;t transform the result. <br />
            5. onError() = Runs the function on error but doesn&apos;t change
            the result.
            <br />
          </p>
        </div>
        <div className="mt-4 grid gap-2">
          <h2 className="text-neutral-100 tracking-tight text-xl">
            We live in a society.
          </h2>
          <p>
            If you are working with Result and sending data from Next JS Server
            Actions to ur frontend. Next will give you an error that you
            can&apos;t use classes. To convert the {`Result<T, E>`} class back
            into the type, you should use the method &quot;type()&quot; and it
            will work.
          </p>
        </div>
      </div>
    </main>
  );
}
