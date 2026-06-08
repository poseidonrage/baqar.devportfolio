import React, { useState, useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { Grid, Box, Stack, Flex } from "@ninna-ui/layout";
import { Heading, Text, Button, IconButton } from "@ninna-ui/primitives";
import { Card } from "@ninna-ui/data-display";
import { Field, Input, Textarea } from "@ninna-ui/forms";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const fetcher = useFetcher();

  const emailAddress = "baqar.naqvi2@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      fetcher.submit(
        { 
          intent: "contact", 
          name: formState.name, 
          email: formState.email, 
          message: formState.message 
        },
        { method: "post" }
      );
    }
  };

  const isSending = fetcher.state === "submitting" && fetcher.formData?.get("intent") === "contact";
  const isSuccess = fetcher.data && (fetcher.data as any).success;

  useEffect(() => {
    if (isSuccess) {
      setFormState({ name: "", email: "", message: "" });
    }
  }, [isSuccess]);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Flex align="center" gap="4" className="section-title-wrapper mb-8">
          <span className="section-number font-mono text-cyan-400">// 06</span>
          <Heading as="h2" size="3xl" className="font-bold text-slate-100">
            Get In Touch
          </Heading>
        </Flex>

        <Grid columns={{ base: 1, md: 2 }} gap="8">
          <Stack gap="6" className="contact-info-column justify-center">
            <Heading as="h3" size="xl" className="font-semibold text-slate-100">
              Let's build something together
            </Heading>
            <Text size="sm" muted className="leading-relaxed max-w-md">
              I am currently open to systems integration consulting, .NET core API architecture projects, and custom Agentic AI/automation workflows. Drop a message or email me directly!
            </Text>

            <Card variant="outline" className="p-6 border border-slate-800 bg-slate-900/40">
              <Text size="xs" color="primary" className="font-mono mb-2 uppercase tracking-wider">
                DIRECT EMAIL
              </Text>
              <Flex align="center" justify="between" className="email-row">
                <Flex align="center" gap="3" className="flex-grow">
                  <Mail className="mail-icon text-slate-400" size={20} />
                  <Text size="md" className="font-mono text-slate-200">
                    {emailAddress}
                  </Text>
                </Flex>
                <IconButton 
                  icon={copied ? <Check size={14} /> : <Copy size={14} />} 
                  aria-label="Copy email address"
                  variant="outline"
                  color={copied ? "success" : "neutral"}
                  size="sm"
                  onClick={copyToClipboard}
                  className="cursor-pointer"
                />
              </Flex>
            </Card>

            <Grid columns={2} gap="4" className="social-links-grid">
              <a href="https://linkedin.com/in/baqar-hussain" target="_blank" rel="noopener noreferrer" className="block">
                <Card variant="outline" interactive className="p-4 border border-slate-800 bg-slate-900/40 flex flex-col items-start gap-3 transition-all duration-300 group">
                  <LinkedinIcon className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  <Text size="xs" className="font-mono text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                    LinkedIn ➔
                  </Text>
                </Card>
              </a>
              <a href="https://github.com/poseidonrage" target="_blank" rel="noopener noreferrer" className="block">
                <Card variant="outline" interactive className="p-4 border border-slate-800 bg-slate-900/40 flex flex-col items-start gap-3 transition-all duration-300 group">
                  <GithubIcon className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  <Text size="xs" className="font-mono text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                    GitHub ➔
                  </Text>
                </Card>
              </a>
            </Grid>
          </Stack>

          <Box className="contact-form-column">
            <Card variant="outline" className="p-6 sm:p-8 border border-slate-800 bg-slate-900/40 shadow-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Field label="Name" required errorText="Name is required">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    fullWidth
                  />
                </Field>

                <Field label="Email" required errorText="Please enter a valid email">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    fullWidth
                  />
                </Field>

                <Field label="Message" required errorText="Message is required">
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Hi Baqar, I'd love to connect..."
                    fullWidth
                  />
                </Field>

                <Button 
                  type="submit" 
                  variant="solid" 
                  color="primary"
                  loading={isSending}
                  fullWidth
                  rightIcon={isSuccess ? <Check size={16} /> : <Send size={16} />}
                  className="cursor-pointer"
                >
                  {isSuccess ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </Card>
          </Box>
        </Grid>
      </div>
    </section>
  );
};
