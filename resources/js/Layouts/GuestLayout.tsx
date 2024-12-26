import ApplicationLogo from "@/components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 bg-secondary">
            <div className="rounded-lg shadow border border-background flex w-full max-w-md flex-col space-y-6 overflow-hidden bg-background p-6">
                <Link href="/" className="mx-auto">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>

                {children}
            </div>
        </div>
    );
}
