'use server';
/**
 * @fileOverview A Genkit flow for the Zecchi Bot AI assistant, handling service inquiries.
 *
 * - zecchiBotServiceInquiry - A function that handles user messages for the Zecchi Bot.
 * - ZecchiBotServiceInquiryInput - The input type for the zecchiBotServiceInquiry function.
 * - ZecchiBotServiceInquiryOutput - The return type for the zecchiBotServiceInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Defines the input schema for the Zecchi Bot service inquiry flow.
 */
const ZecchiBotServiceInquiryInputSchema = z.object({
  message: z.string().describe('The user\'s message to the Zecchi Bot.'),
});
export type ZecchiBotServiceInquiryInput = z.infer<typeof ZecchiBotServiceInquiryInputSchema>;

/**
 * Defines the output schema for the Zecchi Bot service inquiry flow.
 */
const ZecchiBotServiceInquiryOutputSchema = z.object({
  response: z.string().describe('The Zecchi Bot\'s response to the user.'),
});
export type ZecchiBotServiceInquiryOutput = z.infer<typeof ZecchiBotServiceInquiryOutputSchema>;

/**
 * Defines the prompt for the Zecchi Bot AI assistant.
 * It includes instructions on services, how to handle quotes, and pricing restrictions.
 */
const zecchiBotPrompt = ai.definePrompt({
  name: 'zecchiBotPrompt',
  input: {schema: ZecchiBotServiceInquiryInputSchema},
  output: {schema: ZecchiBotServiceInquiryOutputSchema},
  prompt: `Sei l'assistente virtuale della Ditta Zecchi Monica. Rispondi in modo cordiale.\n\nConosci i nostri servizi:\n- Giardinaggio (pubblico/privato)\n- Pulizia terreni\n- Taglio piante alto fusto\n- Pulizie condomini\n- Piccoli lavori edili\n- Scavi\n- Impianti irrigazione\n- Taglio siepi\n\nSe il cliente chiede un preventivo, invitalo a chiamare Monica al 3404962500 o scrivere a monicazecchi56@gmail.com.\nNon inventare prezzi o dare stime di costo. Non fornire informazioni di contatto diverse da quelle indicate per i preventivi.\n\nDomanda del cliente: {{{message}}}`,
});

/**
 * Defines the Genkit flow for handling Zecchi Bot service inquiries.
 * This flow takes a user message, processes it using the defined prompt,
 * and returns the AI's response.
 */
const zecchiBotServiceInquiryFlow = ai.defineFlow(
  {
    name: 'zecchiBotServiceInquiryFlow',
    inputSchema: ZecchiBotServiceInquiryInputSchema,
    outputSchema: ZecchiBotServiceInquiryOutputSchema,
  },
  async (input) => {
    const {output} = await zecchiBotPrompt(input);
    return output!;
  }
);

/**
 * Wrapper function to call the Zecchi Bot service inquiry Genkit flow.
 * @param input - The input containing the user's message.
 * @returns The AI's response to the user.
 */
export async function zecchiBotServiceInquiry(
  input: ZecchiBotServiceInquiryInput
): Promise<ZecchiBotServiceInquiryOutput> {
  return zecchiBotServiceInquiryFlow(input);
}
