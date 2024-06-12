import { createLazyFileRoute } from "@tanstack/react-router";
import Content from "../components/Content";

export const Route = createLazyFileRoute("/")({
  component: Content,
});
