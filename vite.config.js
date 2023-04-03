import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

//Exposing Server
server: {
  host: true;
}

//Exposing on server
server: {
  host: true;
}
