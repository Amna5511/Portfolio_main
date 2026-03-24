import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import Button from "@/components/Button";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: data.name, email: data.email, message: data.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent!");
      reset();
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass p-8 rounded-3xl border border-primary/30 max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-secondary-foreground">
            Get in <span className="font-serif italic font-normal text-white">touch.</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input {...register("name", { required: true })} placeholder="Your name" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all" />
            <input {...register("email", { required: true })} placeholder="Your email" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all" />
            <textarea {...register("message", { required: true })} rows={5} placeholder="Your message..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all resize-none" />
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : <> Send Message <Send className="w-5 h-5"/> </>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;