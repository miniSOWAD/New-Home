import { Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    title: "Location",
    value: "Bangladesh",
    icon: MapPin
  },
  {
    title: "Email",
    value: "support@newhome.com",
    icon: Mail
  },
  {
    title: "Phone",
    value: "+880 1000-000000",
    icon: Phone
  }
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        badge="Contact Us"
        title="Need help with New Home?"
        description="Send us your message, question, or issue. The platform team can review and respond to your request."
      />

      <section className="section-padding">
        <div className="container-main grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title}>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <div>
                      <p className="font-black">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-black">Send Message</h2>

              <p className="mt-2 text-sm text-muted-foreground">
                This form will connect to the backend contact API later.
              </p>

              <form className="mt-6 space-y-5">
                <div className="form-grid">
                  <div className="space-y-2">
                    <label className="input-label" htmlFor="name">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>

                  <div className="space-y-2">
                    <label className="input-label" htmlFor="email">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="input-label" htmlFor="subject">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter message subject" />
                </div>

                <div className="space-y-2">
                  <label className="input-label" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message..."
                    rows={6}
                  />
                </div>

                <Button type="button" className="w-full md:w-auto">
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}