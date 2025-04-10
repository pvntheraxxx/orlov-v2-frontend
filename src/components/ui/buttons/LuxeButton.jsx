import { Button } from "@mui/material";

export default function LuxeButton({
  children,
  href,
  onClick,
  type = "button",
  sx = {},
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "#EFE393",
        color: "#000",
        textTransform: "none",
        minHeight: "42px", // фиксированная высота
        px: 3,
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.4s ease-in-out",
        position: "relative",
        overflow: "hidden",
        fontWeight: 500,
        fontSize: "0.9rem",
        maxWidth: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-75%",
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.6) 100%)",
          transform: "skewX(-20deg)",
          transition: "left 0.5s ease",
        },
        "&:hover::before": {
          left: "125%",
        },
        "&:hover": {
          backgroundColor: "#F7F0C3",
          transform: "translateY(-3px) scale(1.05)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
