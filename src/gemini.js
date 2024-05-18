import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "AIzaSyBxo_fFSUNmxWoCKyOVRreq9ats0PFEKKg";

      // Access your API key (see "Set up your API key" above)
      export const genAI = new GoogleGenerativeAI(API_KEY);

      // ...

      export const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      // ...

    
