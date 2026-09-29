import { Phone } from "lucide-react";
import { business } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={cn(
                buttonVariants(),
                "size-13 rounded-full bg-green-500 p-0 text-white shadow-xl shadow-green-500/30 ring-1 ring-white/20 transition-transform hover:scale-105 hover:bg-green-600"
              )}
            />
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
          </svg>
        </TooltipTrigger>
        <TooltipContent side="left">Chat on WhatsApp</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <a
              href={`tel:${business.phoneHref}`}
              aria-label={`Call ${business.name}`}
              className={cn(
                buttonVariants(),
                "size-13 rounded-full p-0 shadow-xl shadow-brand-600/30 ring-1 ring-white/20 transition-transform hover:scale-105"
              )}
            />
          }
        >
          <Phone className="h-5 w-5" fill="currentColor" strokeWidth={0} />
        </TooltipTrigger>
        <TooltipContent side="left">Call {business.phoneDisplay}</TooltipContent>
      </Tooltip>
    </div>
  );
}
