import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorState({
    title = "Something went wrong",
    description = "An unexpected error occurred while loading this content.",
    icon: Icon = AlertTriangle,
    action,
    onRetry,
    className,
    fullScreen = false,
}) {
    return (
        <section
            className={cn(
                "relative flex items-center justify-center overflow-hidden px-6",
                fullScreen ? "min-h-screen" : "min-h-[500px]",
                className
            )}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl" />
            </div>

            <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[28px] border border-primary/15 bg-primary/5 backdrop-blur-sm">
                    <Icon className="h-11 w-11 text-primary" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {title}
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                    {description}
                </p>

                {(onRetry || action) && (
                    <div className="mt-8 flex items-center gap-3">
                        {action || (
                            <Button
                                size="lg"
                                variant="default"
                                onClick={onRetry}
                                className="min-w-[160px]"
                            >
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Try Again
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}