import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            size="sm"
            variant="ghost"
            className="w-full justify-start px-0"
        >
            <div className="flex gap-2 dark:hidden">
                <Moon className="size-5" />
                <span className="block lg:hidden"> Escuro </span>
            </div>

            <div className="dark:flex gap-2 hidden">
                <Sun className="size-5" />
                <span className="block lg:hidden">Claro</span>
            </div>

            <span className="sr-only">Trocar de tema</span>
        </Button>
    );
};
