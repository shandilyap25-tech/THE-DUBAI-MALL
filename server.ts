import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, serverTimestamp, query, where, orderBy, writeBatch } from "firebase/firestore";
import firebaseConfig from "./firebase-applet-config.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase (Client SDK bridge for resilient connectivity)
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp, (firebaseConfig as any).firestoreDatabaseId);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // ==========================================
  // 1. STORY-DRIVEN CONTENT ENGINE
  // ==========================================
  app.get("/api/sections", async (req, res) => {
    try {
      const q = query(collection(db, "sections"), orderBy("order"));
      const snapshot = await getDocs(q);
      const sections = snapshot.docs.map(doc => {
          const data = doc.data();
          delete (data as any).system_key;
          return { id: doc.id, ...data };
      });
      
      // Default fallback if DB is empty
      if (sections.length === 0) {
        return res.json([
          {
            title: "Hero",
            headline: "The Heart of the World",
            subtext: "Experience the pinnacle of shopping, dining, and leisure.",
            media: {
              type: "video",
              source: "youtube",
              url: "https://www.youtube.com/watch?v=ahy5o5nT4oI",
              autoplay: true,
              loop: true,
              muted: true
            },
            layout_type: "fullscreen",
            order: 1
          }
        ]);
      }
      res.json(sections);
    } catch (error) {
      console.error("Error fetching sections (Client Bridge):", error);
      res.status(500).json({ error: "Failed to fetch storytelling sections" });
    }
  });

  // ==========================================
  // 2. HIGH-IMPACT DATA LAYER (Highlights)
  // ==========================================
  app.get("/api/highlights", async (req, res) => {
    try {
      const docSnap = await getDoc(doc(db, "config", "highlights"));
      if (docSnap.exists()) {
        res.json(docSnap.data());
      } else {
        // High-end stats for "Why Dubai Mall"
        res.json({
          visitors: "105M+",
          stores: "1,200+",
          area: "1.1M sqm",
          attractions: "15+"
        });
      }
    } catch (error) {
      res.json({ visitors: "105M+", stores: "1,200+", area: "1.1M sqm", attractions: "15+" });
    }
  });

  // ==========================================
  // 3. BUSINESS CONVERSION LAYER (Leads)
  // ==========================================
  app.post("/api/lead", async (req, res) => {
    try {
      const { name, email, company_name, interest_type, business_category, message } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
      }

      const docRef = await addDoc(collection(db, "leads"), {
        name,
        email,
        company_name: company_name || "N/A",
        interest_type: interest_type || "leasing",
        business_category: business_category || "retail",
        message: message || "",
        timestamp: serverTimestamp(),
        system_key: process.env.INTERNAL_SYSTEM_KEY || 'visionary_bypass_2026'
      });

      console.log(`New business lead captured: ${docRef.id}`);
      res.status(201).json({ status: "success", id: docRef.id });
    } catch (error) {
      console.error("Error capturing lead:", error);
      res.status(500).json({ error: "Failed to process lead" });
    }
  });

  // ==========================================
  // 4. OPPORTUNITY SEGMENTATION API
  // ==========================================
  app.get("/api/opportunities", async (req, res) => {
    try {
      const { type } = req.query;
      const q = query(
        collection(db, "opportunities"),
        where("type", "==", type || "leasing")
      );
      const snapshot = await getDocs(q);
      const opportunities = snapshot.docs.map(doc => doc.data());
      
      if (opportunities.length === 0) {
          // Mock some deep product thinking content
          const mockData: any = {
              leasing: {
                  headline: "Premium Retail Spaces",
                  benefits: ["High footfall", "Global visibility", "Turnkey solutions"],
                  audience: "HNWIs, Global Tourists",
                  media_url: "https://www.youtube.com/watch?v=Rjf5BFxiOKA"
              },
              sponsorship: {
                  headline: "Own the Destination",
                  benefits: ["Brand dominance", "Integrated marketing", "Live activations"],
                  audience: "Mass Market",
                  media_url: "https://www.youtube.com/watch?v=upFoXg7myu8"
              }
          };
          return res.json([mockData[type as string] || mockData.leasing]);
      }
      res.json(opportunities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch opportunities" });
    }
  });

  // ==========================================
  // 5. EVENTS & ACTIVATION ENGINE
  // ==========================================
  app.get("/api/events", async (req, res) => {
    try {
      const q = query(collection(db, "events"), orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      const events = snapshot.docs.map(doc => doc.data());
      
      if (events.length === 0) {
          return res.json([
              {
                  title: "Fashion Avenue Launch",
                  type: "past",
                  highlights: "Attendance by global style icons",
                  venue: "Main Atrium"
              },
              {
                  title: "Ice Rink Concert Series",
                  type: "capability",
                  highlights: "3,000 capacity seating",
                  venue: "Dubai Ice Rink"
              }
          ]);
      }
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  // ==========================================
  // 6. ADMIN SEED (For Initial Setup)
  // ==========================================
  app.post("/api/admin/seed", async (req, res) => {
    try {
      const batch = writeBatch(db);

      // Seed Sections
      const dubaiSections = [
        { 
          id: "hero", 
          title: "Hero", 
          headline: "Dubai Mall: The Global Landmark", 
          subtext: "Where Vision Meets Scale. The most visited retail and lifestyle destination in the world.", 
          media: { type: "video", source: "youtube", url: "https://www.youtube.com/watch?v=RD0xom40iEE", autoplay: true, loop: true, muted: true }, 
          layout_type: "fullscreen", 
          order: 1 
        },
        { 
          id: "vision", 
          title: "Vision", 
          headline: "Redefining Human Connectivity & Retail", 
          subtext: "The Oasis represents a paradigm shift where global brands manifest their grandest visions, surrounded by an environment that breathes with life.", 
          media: { type: "video", source: "youtube", url: "https://www.youtube.com/watch?v=JkbYUusFuIk", start_time: 60, autoplay: true, loop: true, muted: true },
          details: [
            { label: "Serenity", text: "1.5M Sq Ft of water features and green corridors." },
            { label: "Innovation", text: "Next-gen immersive commercial spaces." },
            { label: "Exclusivity", text: "A curated ecosystem of 500+ ultra-luxury boutiques." }
          ],
          layout_type: "text-centric", 
          order: 2 
        },
        { 
          id: "scale", 
          title: "Scale", 
          headline: "The Architecture of Influence", 
          subtext: "Scale is our foundation. Influence is our result. We provide the platform; the world provides the audience.", 
          media: { type: "video", source: "youtube", url: "https://www.youtube.com/watch?v=HXvlbcf4wqs", start_time: 60, autoplay: true, loop: true, muted: true },
          layout_type: "split", 
          order: 3 
        },
        { 
          id: "retail", 
          title: "Retail", 
          headline: "Strategic Selection", 
          subtext: "The definitive retail destination featuring 1,200+ outlets, anchored by iconic department stores: Galeries Lafayette and Bloomingdale’s.", 
          media: { type: "video", source: "youtube", url: "https://www.youtube.com/watch?v=MabSrkkIn6E", start_time: 60, autoplay: true, loop: true, muted: true },
          items: [
            { title: "Galeries Lafayette", desc: "The ultimate French fashion experience in Dubai." },
            { title: "Bloomingdale’s", desc: "A world-class department store for the discerning." },
            { title: "Specialist Boutiques", desc: "Unmatched variety across every retail category imaginable." }
          ],
          layout_type: "grid", 
          order: 4 
        },
        { 
          id: "couture", 
          title: "Fashion Avenue", 
          headline: "The Couture Collection", 
          subtext: "Fashion Avenue features 150+ ultra-luxury shopping and dining experiences.", 
          media: { type: "video", source: "youtube", url: "https://www.youtube.com/watch?v=J5kBXqX2TtY", start_time: 60, autoplay: true, loop: true, muted: true },
          layout_type: "split", 
          order: 5 
        },
        { 
          id: "lifestyle", 
          title: "Lifestyle", 
          headline: "Gastronomic Hub", 
          subtext: "200+ international dining experiences ranging from Michelin-star concepts to artisanal cafes.", 
          layout_type: "split", 
          order: 6 
        },
        { 
          id: "entertainment", 
          title: "Attractions", 
          headline: "Spectacle Reimagined", 
          subtext: "A family destination featuring world-class leisure attractions like 'At the Top, Burj Khalifa'.", 
          media: { type: "video", source: "youtube", url: "https://www.youtube.com/watch?v=gs9IdikHnFA", start_time: 60, autoplay: true, loop: true, muted: true },
          items: [
            { title: "Burj Khalifa", desc: "Adjacent to the mall, the world's tallest structure." },
            { title: "Dubai Aquarium", desc: "One of the largest suspended tanks in the world." },
            { title: "Dubai Ice Rink", desc: "Olympic-sized venue for global events and leisure." }
          ],
          layout_type: "grid", 
          order: 7 
        },
        {
          id: "visiting",
          title: "Plan Visit",
          headline: "Seamless Access",
          subtext: "Open Sun-Wed 10:00-00:00, Thu-Sat 10:00-01:00. Accessible via Dubai Metro (Red Line) and Sheikh Zayed Road.",
          details: [
            { label: "Opening Hours", text: "Daily 10am to Midnight (Thu-Sat until 1am)." },
            { label: "Location", text: "Connected via the Burj Khalifa/Dubai Mall Metro Station." },
            { label: "Parking", text: "Extensive shaded parking with professional valet services." }
          ],
          layout_type: "list",
          order: 8
        },
        {
          id: "services",
          title: "Services",
          headline: "Elite Amenities",
          subtext: "Equipping visitors with premium services for an effortless journey.",
          items: [
            { title: "Guest Support", desc: "Multilingual desks located at all major mall entry points." },
            { title: "Digital Ready", desc: "Complimentary high-speed WiFi and digital map assistance." },
            { title: "Premium Access", desc: "Emaar Gift Cards, Delivery services, and Valet parking." }
          ],
          layout_type: "services-grid",
          order: 9
        },
        { 
          id: "design", 
          title: "Design", 
          headline: "Blueprints of the Sublime", 
          subtext: "Where architecture meets performance. Every curve is a social promise.", 
          layout_type: "featured", 
          order: 10 
        }
      ];

      const systemKey = 'visionary_bypass_2026';
      
      dubaiSections.forEach(({ id, ...s }) => {
        const ref = doc(db, "sections", id);
        batch.set(ref, { ...s, system_key: systemKey });
      });

      // Seed Highlights
      batch.set(doc(db, "config", "highlights"), {
        visitors: "105M+",
        stores: "1,200+",
        area: "1.1M sqm",
        attractions: "15+",
        system_key: systemKey
      });

      // Seed Whats New
      const whatsNewItems = [
        {
          title: "Secret Garden New Menu",
          category: "Dining",
          description: "Time to create delicious memories.",
          brand: "Secret Garden",
          isFeatured: true,
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
          date: new Date().toISOString(),
          tags: ["food", "new menu", "restaurant"],
          status: "active"
        },
        {
          title: "Parfums de Marly Althair Launch",
          category: "Fashion",
          description: "A new fragrance rooted in French heritage.",
          brand: "Parfums de Marly",
          isFeatured: true,
          image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80",
          date: new Date().toISOString(),
          tags: ["fragrance", "launch", "luxury"],
          status: "active"
        },
        {
          title: "Kurt Geiger x Matthew Williamson",
          category: "Fashion",
          description: "Exclusive collaboration collection.",
          brand: "Kurt Geiger",
          isFeatured: true,
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
          date: new Date().toISOString(),
          tags: ["fashion", "collab", "shoes"],
          status: "active"
        },
        {
          title: "Kilian Paris 15 Years",
          category: "Luxury",
          description: "Limited anniversary collection.",
          brand: "Bloomingdales",
          isFeatured: true,
          image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1600&q=80",
          date: new Date().toISOString(),
          tags: ["anniversary", "luxury", "event"],
          status: "active"
        }
      ];

      whatsNewItems.forEach((item, index) => {
        const ref = doc(db, "whats_new", `wn_${index + 1}`);
        batch.set(ref, { ...item, system_key: systemKey });
      });

      await batch.commit();
      res.json({ message: "Dubai Mall Backend Seeded Successfully" });
    } catch (error) {
      console.error("Seed error:", error);
      res.status(500).json({ error: "Seeding failed", detail: error instanceof Error ? error.message : String(error) });
    }
  });

  // Vite setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dubai Mall Backend running on port ${PORT}`);
  });
}

startServer();

