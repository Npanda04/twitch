import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger}  from "@/components/ui/tooltip"


interface HintProps{
    label : string,
    asChild?: boolean,
    children: React.ReactNode,
    side?: "top" | "bottom" | "left" | "right",
    align?: "start" | "center" | "end";


}

export const Hint = ({
    label,
    children, 
    asChild,
    side, 
    align,

}: HintProps) =>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild = {asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent 
                    className="text-black bg-white"
                    side={side}
                    align={align}
                >
                    <p className="font-semibold"> 
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )

}








