import Codeblock from "@/components/codeblock";

export default function Page() {
  return (
    <main className="w-full max-w-2xl grid gap-6 p-4 pt-36 text-lg pb-36">
      <p className="text-sm -mb-2">28 Aug 2026.</p>
      <div className="grid gap-1">
        <h1 className="text-2xl text-neutral-100 font-semibold tracking-tight">
          Result Enum alike in Typescript.
        </h1>
        <p className="text-sm">
          Recreating my favourite Rust feature in Typescript for error handling.
        </p>
      </div>
      <div className="mt-4 grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">
          Implementation details
        </h2>
        <p>
          I implemented Result as a type to allow for type narrowing, using it
          in class to define methods on it. Type narrowing was crucial to avoid
          accessing error or data without confirming success.
        </p>
      </div>
      <div className="grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">
          Type Narrowing & ResultType
        </h2>
        <div className="grid gap-2">
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
          <p>
            Then I just started defining methods on this class to create
            functionality similar to Result Enum in Rust.
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        <h2 className="text-neutral-100 tracking-tight text-xl">Methods</h2>
        <div className="grid gap-2">
          <p>So far I have made 9 methods 5 of which are static methods</p>
          <p>
            2 of the methods, ok and error just construct basic result class
            with values provided.
          </p>
          <p>
            <b>TryCatch</b> is an essential method. Allowing you to convert
            trycatch blocks into Result where error is unknown. (as JS errors
            are untyped by default)
          </p>
          <Codeblock lang="typescript">{`const data: Result<Response, unknown> = await Result.tryCatch({}, async() => {
  return await fetch('https://www.loremus.gay')
})`}</Codeblock>
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
            <b>Fallback</b> is a method that takes in functions with same
            arguments and return result. It runs one method after another in the
            array and returns the first one that succeeds, if all fails, it
            returns default error.
          </p>
          <Codeblock lang="typescript">{`const data: Result<UserData, string> = Result.fallback(
  {id: "userId"}, 
  "all ways to fetch data failed", 
  [fetchFromCache, fetchFromDb1, fetchFromDb2]
)`}</Codeblock>
          <p>
            <b>Settle</b> is a method that takes in a an array of Promised
            Results, awaits them and makes sure they are all successful, and
            returns the successful data as a tuple. If even one of them fails,
            it returns null.
          </p>
          <Codeblock lang="typescript">{`const data: Result<[string, number], null> = Result.settle([
  returnsStringResultPromise(), 
  returnsNumberResultPromise()
])`}</Codeblock>
          <p>
            4 of the non static methods are match, mapOk. mapError all of which
            take a result and map data or error to given function. Along with a
            utility called type to convert it to type from class to avoid issues
            with NextJS Server Actions.
          </p>
        </div>
      </div>
    </main>
  );
}
