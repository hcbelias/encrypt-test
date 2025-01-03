import { Outlet } from "@modern-js/runtime/router";

export default function Layout() {
  return (
    <div>
      <h1>Encryption Test</h1>
      <Outlet />
    </div>
  );
}
