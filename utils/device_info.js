export function getDeviceInfo(userAgent) {
  if (!userAgent) return "Created using Unknown client";

  const ua = userAgent.toLowerCase();

  if (ua.includes("postman")) return "Created using Postman";
  if (ua.includes("httpie")) return "Created using HTTPie";
  if (ua.includes("curl")) return "Created using cURL";
  if (ua.includes("wget")) return "Created using Wget";

  return `Created using ${userAgent}`; // fallback ambil literal UA
}
