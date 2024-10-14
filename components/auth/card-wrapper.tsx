"use client";
import {Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-buttont";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonlabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};


export const CardWrapper = ({
    children,
    headerLabel,
    backButtonlabel,
    backButtonHref,
    showSocial = false
}: CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-md flex flex-col">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && 
            <CardFooter className="font-normal w-full justify-center flex flex-col">
                <Social />
            </CardFooter>}
            <CardFooter className="font-normal w-full justify-center">
                <BackButton label={backButtonlabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}