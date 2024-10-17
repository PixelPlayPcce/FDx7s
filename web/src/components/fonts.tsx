import localFont from "next/font/local";

export const rubik = localFont({
    src: [
      {
        path: "../app/fonts/Rubik/Rubik-VariableFont_wght.ttf",
        weight: "100 900",
      },
      {
        path: "../app/fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf",
        weight: "100 900",
        style: "italic",
      },
    ],
    variable: "--font-rubik",
  });
  
  // Import Space Grotesk font
  export const spaceGrotesk = localFont({
    src: "../app/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
    variable: "--font-space-grotesk",
    weight: "100 900",
  });
  
  // Import Space Mono font
  export const spaceMono = localFont({
    src: [
      {
        path: "../app/fonts/Space_Mono/SpaceMono-Regular.ttf",
        weight: "400",
      },
      {
        path: "../app/fonts/Space_Mono/SpaceMono-Bold.ttf",
        weight: "700",
      },
      {
        path: "../app/fonts/Space_Mono/SpaceMono-Italic.ttf",
        weight: "400",
        style: "italic",
      },
      {
        path: "../app/fonts/Space_Mono/SpaceMono-BoldItalic.ttf",
        weight: "700",
        style: "italic",
      },
    ],
    variable: "--font-space-mono",
  });