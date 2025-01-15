import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Invoke the Sorcerer`s Presence
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Step forth, seeker of arcane wisdom and mystical craft, and send 
          forth your missives into the aether. Whether you wish to forge 
          alliances, unlock secrets, or share tales of your own magical 
          pursuits, your words shall be etched into the spellbook of 
          this realm. Use the form below to dispatch your inquiry, and 
          prepare for the enchantment that follows.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
