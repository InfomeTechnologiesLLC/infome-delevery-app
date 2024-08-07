import { RiErrorWarningFill } from "@remixicon/react";
function ErrorPage({ detail = "" }) {
  return (
    <div className="normal-page grid h-full place-content-center">
      <RiErrorWarningFill
        color="red"
        className="place-self-center m-3"
        size={"50"}
      />
      <h2 className="text-red-600  text-3xl">Error</h2>
      <span>{detail}</span>
    </div>
  );
}

export default ErrorPage;
