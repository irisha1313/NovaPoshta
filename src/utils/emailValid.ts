export const emailValid = (v: string = "") => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    "Email address must be a valid address."
  );
};