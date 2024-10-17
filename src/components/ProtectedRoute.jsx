import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = JSON.parse(
      sessionStorage.getItem("loggedInUser") || "{}"
    );
    if (!loggedInUser?.userId) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
}
