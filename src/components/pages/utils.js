
export const formatStatus = () => {
  switch (status) {
    case "failed":
      return "request failed";
    case "added":
      return "👌";
    case "delivered-awaiting-approval":
      return "🕑";
    case "sending":
      return "✉️";
  }
};
