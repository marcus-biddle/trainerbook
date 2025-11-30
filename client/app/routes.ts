import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";
 
export default [
  // Landing page at "/"
  index("routes/home.tsx"),

  // Auth routes
  route("login", "features/auth/login/TrainerBookLoginPage.tsx"),
  route("signup", "features/auth/signup/TrainerBookSignUpPage.tsx"),

  // Simple top-level pages
//   route("trainer", "routes/trainer.tsx"),
//   route("client", "routes/client.tsx"),

  // Example nested dashboard with child routes
//   layout("routes/dashboard-layout.tsx", [
//     index("routes/dashboard.tsx"),          // "/dashboard"
//     route("clients", "routes/dashboard-clients.tsx"), // "/dashboard/clients"
//     route("programs", "routes/dashboard-programs.tsx"),
//   ]),

  // Catch-all / 404 (path is usually wired in root route file)
//   route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;