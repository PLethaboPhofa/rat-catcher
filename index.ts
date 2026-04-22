import { serve } from "bun";
import { mkdirSync } from "fs";
import { join } from "path";

// Ensure upload folder exists
const uploadDir = join(import.meta.dir, "uploads");
mkdirSync(uploadDir, { recursive: true });

serve({
    port: 3000,
    async fetch(req) {
        // Handle CORS preflight requests
        if (req.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": "*", // Allow requests from any origin
                    "Access-Control-Allow-Methods": "POST, OPTIONS", // Allow POST and OPTIONS methods
                    "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
                    "Access-Control-Max-Age": "86400", // Cache preflight response for 24 hours
                },
            });
        }

        if (req.method === "POST" && req.url.endsWith("/upload")) {
            const formData = await req.formData();
            const videoEntry = formData.get("video");

            if (!(videoEntry instanceof File)) {
                return new Response("Invalid or missing file", { status: 400, headers: { "Access-Control-Allow-Origin": "*" } });
            }

            const buffer = await videoEntry.arrayBuffer();
            const filePath = join(uploadDir, videoEntry.name);
            await Bun.write(filePath, Buffer.from(buffer));

            console.log(`Saved: ${videoEntry.name}`);
            return new Response("Uploaded!", { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
        }

        // For any other requests, return 404 with CORS headers
        return new Response("Not Found", { status: 404, headers: { "Access-Control-Allow-Origin": "*" } });
    },
});