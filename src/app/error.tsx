"use client"; // Error components must be Client Components

type ErrorProps = {
  // error: Error & { digest?: string }
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
