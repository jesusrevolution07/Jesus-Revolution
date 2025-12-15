import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SpiritualResponse, JesusMessageResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    message: {
      type: Type.STRING,
      description: "A short, encouraging, cool, and youthful message based on the user's feeling. Use informal Portuguese suitable for youth ministry.",
    },
    verse: {
      type: Type.OBJECT,
      properties: {
        text: { type: Type.STRING, description: "The Bible verse text." },
        reference: { type: Type.STRING, description: "The Bible reference (e.g., João 3:16)." }
      },
      required: ["text", "reference"]
    },
    songs: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          artist: { type: Type.STRING }
        },
        required: ["title", "artist"]
      },
      description: "List of 2 music recommendations matching the mood."
    }
  },
  required: ["message", "verse", "songs"]
};

const jesusMessageSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    message: {
      type: Type.STRING,
      description: "A comforting, compassionate, and loving message written in the first person, as if Jesus were speaking directly to the user's heart.",
    },
    verse: {
      type: Type.OBJECT,
      properties: {
        text: { type: Type.STRING, description: "A comforting verse from the Catholic Bible." },
        reference: { type: Type.STRING, description: "The reference." }
      },
      required: ["text", "reference"]
    },
    prayer_tip: {
      type: Type.STRING,
      description: "A very short, practical spiritual action or prayer tip."
    }
  },
  required: ["message", "verse", "prayer_tip"]
};

export const getSpiritualGuidance = async (userInput: string): Promise<SpiritualResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `O usuário é um jovem do movimento 'Jesus Revolution'. Ele disse: "${userInput}". 
      
      Aja como um DJ e mentor jovem, carismático e cheio de fé. 
      1. Dê uma resposta personalizada curta e impactante.
      2. Um versículo bíblico que se conecte.
      3. Sugira 2 músicas OBRIGATORIAMENTE APENAS dos seguintes artistas:
         - GERADOS PELA IMACULADA
         - COLO DE DEUS
         - FLÁVIO VITOR
         - PADRE MARCELO ROSSI
         - CRISTO ALEGRIA
         - ROSAS DE SARON
         - FREI GILSON
      
      Responda estritamente em JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as SpiritualResponse;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    throw error;
  }
};

export const getJesusTalk = async (userInput: string): Promise<JesusMessageResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `O usuário está buscando conforto e direção. Ele sente: "${userInput}".
      
      Aja como JESUS CRISTO falando diretamente ao coração desse filho(a).
      Use um tom de infinita compaixão, amor, misericórdia e acolhimento.
      Use a Bíblia Católica como referência.
      Não julgue, apenas ame e conforte.
      
      Responda estritamente em JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: jesusMessageSchema,
        temperature: 0.6,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as JesusMessageResponse;
  } catch (error) {
    console.error("Error calling Gemini Jesus Talk:", error);
    throw error;
  }
};