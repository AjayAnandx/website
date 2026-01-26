import Groq from "groq-sdk";
import { services, getServiceInfo } from "../constants/services";
import { companyData } from "../constants/companyData";
import { siteRoutes } from "../constants/siteMap";

/**
 * Chatbot Logic
 */

const SYSTEM_DELAY = 1200; // Simulated thinking time for realism
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Initialize Groq
let groq = null;

if (API_KEY) {
    try {
        groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
    } catch (e) {
        console.error("Failed to initialize Groq:", e);
    }
} else {
    console.warn("Groq API Key is missing in environment variables.");
}

export const generateResponse = async (userMessage) => {
    // Priority 1: Groq API
    if (groq) {
        try {
            const systemPrompt = `
            You are a helpful and charismatic sales assistant for "Quantum Scripts", a premium tech agency.
            
            Our Full Business Knowledge Base:
            ${JSON.stringify(companyData)}

            Our Site Map (Use these paths for buttons):
            ${JSON.stringify(siteRoutes)}

            Your Goal:
            - Answer the user's question accurately using the data above.
            - If they ask about careers, mention our open internships.
            - If they ask about past work, mention our case studies.
            - Be concise (max 2-3 sentences).
            - Always try to encourage them to book a consultation or "buy now".
            
            IMPORTANT: DYNAMIC BUTTON GENERATION
            If the user's intent matches a specific page in our Site Map, you MUST append a button action at the very end of your response.
            Format: [ACTION:Button Label|/path/to/page]
            
            Examples:
            - User: "I need a website" -> Response: "... [ACTION:Exlpore Web Services|/website-development]"
            - User: "Hiring?" -> Response: "... [ACTION:View Careers|/careers]"
            - User: "Let's talk" -> Response: "... [ACTION:Book a Call|/book-call]"
            
            Only output ONE action per message if relevant.
            `;

            const completion = await groq.chat.completions.create({
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userMessage }
                ],
                model: "llama-3.3-70b-versatile",
            });

            let text = completion.choices[0]?.message?.content || "";
            let action = null;
            let actionLabel = null;
            let actionLink = null;

            // Parse [ACTION:Label|Link]
            const actionRegex = /\[ACTION:(.*?)\|(.*?)\]/;
            const match = text.match(actionRegex);

            if (match) {
                action = "dynamic_button";
                actionLabel = match[1].trim();
                actionLink = match[2].trim();
                text = text.replace(match[0], "").trim();
            }

            return {
                text,
                type: "bot",
                action,
                actionLabel,
                actionLink
            };

        } catch (error) {
            console.error("Groq API Error:", error);
            console.error("Error details:", error.message);
            // Fallthrough to local logic if API fails
        }
    }

    // Priority 2: Local Logic (Fallback/Demo Mode)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(processLocalLogic(userMessage));
        }, SYSTEM_DELAY);
    });
};

const processLocalLogic = (message) => {
    const lowerMsg = message.toLowerCase();

    // 1. Check for greeting
    if (["hi", "hello", "hey", "hola"].some(g => lowerMsg.startsWith(g))) {
        return {
            text: "Hello! I'm your AI assistant (Demo Mode). I can help you explore our services like Software Development, AI Solutions, and more. What are you looking for today?",
            type: "bot"
        };
    }

    // 2. Check for "Intent to Buy" / Contact
    if (["buy", "purchase", "cost", "price", "pricing", "hire", "book", "contact", "call"].some(w => lowerMsg.includes(w))) {
        return {
            text: "That sounds great! I'd love to get you a custom quote or set up a consultation. Would you like to schedule a call with our team?",
            type: "bot",
            action: "book_call"
        };
    }

    // 3. Service Lookup
    const serviceInfo = getServiceInfo(lowerMsg);
    if (serviceInfo.found) {
        return {
            text: serviceInfo.response,
            type: "bot",
            action: "show_service",
            serviceLink: serviceInfo.service.link
        };
    }

    // 4. Default Fallback
    return {
        text: "I'm currently in Demo Mode (Offline). I can tell you about our **Software**, **Web**, **AI**, and **Course** services. Try asking 'Tell me about AI'.",
        type: "bot"
    };
};
