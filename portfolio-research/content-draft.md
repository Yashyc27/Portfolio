# Proposed Portfolio Content — Review Draft

This is copy for review only. It has not been applied to the portfolio website. It uses the certification and GitHub research files and marks claims that need confirmation. GitHub source code was inspected, but public repository ownership alone does not establish which portions were individually authored by Yash.

## 1. Featured project descriptions

### Financial Document Management with Semantic Analysis

**Short card copy**  
A Python/FastAPI prototype for financial text document management and semantic passage retrieval. It stores document metadata in SQLite and uses sentence-transformer embeddings with Qdrant to retrieve relevant chunks.

**Tags:** Python · FastAPI · SQLite · SQLAlchemy · Qdrant · Sentence Transformers · LangChain

**Status line:** Local prototype; semantic retrieval is implemented. LLM answer generation, persistent vector storage, and secure authentication are not implemented in the reviewed version.

**Link:** [GitHub repository](https://github.com/Yashyc27/Financial-Document-Management-with-Semantic-Analysis) · Live demo: Not Available.

### Enterprise Knowledge Base Q&A — Amazon Bedrock

**Short card copy**  
A Streamlit chat prototype that connects to Amazon Bedrock Knowledge Bases for retrieval-augmented responses and displays source excerpts returned with the answer.

**Tags:** Python · Streamlit · boto3 · Amazon Bedrock · Knowledge Bases

**Status line:** Prototype; AWS resource configuration and a live deployment have not been verified. The repository includes sample TechNova deployment wording; confirm attribution before publishing it.

**Link:** [GitHub repository](https://github.com/Yashyc27/Enterprise-Knowledge-Base-Q-A-System) · Live demo: Not Available.

### Tree Detection and Health Analysis using YOLOv7

**Short card copy**  
A Flask computer-vision prototype that runs YOLOv7 tree detection on uploaded imagery, draws bounding boxes, and estimates crown categories with a simple color heuristic.

**Tags:** Python · Flask · YOLOv7 · PyTorch · OpenCV · NumPy

**Status line:** Prototype; the crown-health labels are heuristic and have not been validated as plant-health predictions. Model weights and a live demo were not verified.

**Link:** [GitHub repository](https://github.com/Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7) · Live demo: Not Available.

## 2. Detailed case study copy

### Case study: Financial Document Management with Semantic Analysis

**Overview**  
This project explores document organization and meaning-based search for financial text files. It combines a REST API, relational metadata storage, text chunking, embeddings, and vector similarity retrieval.

**Problem**  
Exact keyword matching can miss relevant text when a query uses different wording from the source. A document workflow also needs to connect retrieved passages back to the document they came from.

**Approach implemented**  
The FastAPI service accepts a text upload, stores document fields in SQLite through SQLAlchemy, splits the text into 700-character chunks with a 70-character overlap, embeds chunks with `all-MiniLM-L6-v2`, and indexes them in Qdrant. Search retrieves up to 20 candidates and returns the first five with metadata that includes a document ID.

**Architecture**  
API request → FastAPI route → SQLite metadata record → text splitter → Hugging Face sentence embeddings → in-memory Qdrant collection → matching passages and metadata.

**Technology stack**  
Python, FastAPI, SQLAlchemy, SQLite, Qdrant, LangChain integrations, Hugging Face Sentence Transformers, Uvicorn.

**Current result**  
The code implements semantic passage retrieval. No benchmark results were found, and the reviewed source does not implement LLM response generation. Do not call this a complete generative RAG system or claim accuracy/performance gains.

**Limitations**  
The Qdrant client is in-memory; authentication returns a dummy token; passwords are plaintext; a hard-coded secret is present; role permissions are not enforced on document routes; PDF parsing is not implemented; the context endpoint returns placeholder text. This version is suitable only as a local prototype with non-sensitive data.

**Future work (proposed, not completed)**  
Add durable vector storage, secure authentication and authorization, file validation and PDF extraction, document-scoped context retrieval, automated tests, and a controlled evaluation set. Add LLM answer generation only if it is implemented and evaluated.

**Links**  
[GitHub repository](https://github.com/Yashyc27/Financial-Document-Management-with-Semantic-Analysis) · Demo: Not Available.

### Case study: Enterprise Knowledge Base Q&A — Amazon Bedrock

**Overview**  
A Streamlit chat interface connects to the Bedrock Agent Runtime `retrieve_and_generate` operation and displays generated answers with excerpts from returned source references.

**Problem**  
Users need a conversational entry point for searching a document knowledge base, along with access to source excerpts that help them inspect the answer's basis.

**Approach implemented**  
The app stores conversation messages in Streamlit session state, sends each prompt to the configured Bedrock Knowledge Base and model, extracts citation references from the response, and displays excerpts in an expander.

**Architecture**  
Streamlit UI → boto3 Bedrock Agent Runtime → configured Knowledge Base/model → response and retrieved references → answer/citation display.

**Technology stack**  
Python, Streamlit, boto3/botocore, Amazon Bedrock. The README proposes supporting AWS resources including S3 and OpenSearch Serverless; their actual provisioning and operation were not verified.

**Current result**  
The source contains a real Bedrock retrieval-and-generation API call, but no successful live run or production deployment was verified. No quality or latency results were present in the inspected evidence.

**Limitations and accuracy note**  
The source hard-codes an AWS region, knowledge-base ID, and Titan Text Express model ARN. README sections refer to different model choices and describe TechNova Corporation internal deployment. Do not present TechNova as a client, employer, or real production deployment without confirmation. Confirm the configuration, remove sensitive resource identifiers, and align the README before publication.

**Future work (proposed, not completed)**  
Move AWS settings to environment configuration, add setup checks and error handling, align documentation to the exact model configuration, verify citations against a known test corpus, and provide a safe demo that contains no private documents.

**Links**  
[GitHub repository](https://github.com/Yashyc27/Enterprise-Knowledge-Base-Q-A-System) · Demo: Not Available.

### Case study: Tree Detection and Health Analysis using YOLOv7

**Overview**  
A Flask application accepts an image, runs YOLOv7 detection, draws boxes around detected trees, and returns a count and color-based category summary.

**Problem**  
Reviewing aerial imagery to identify and count trees requires manual effort; image detections can help locate candidate trees for review.

**Approach implemented**  
The route decodes uploaded image bytes, calls a loaded YOLOv7 model, filters detections by class 0, computes box areas, and draws annotated results. It then assigns crown categories using thresholds on average color values.

**Architecture**  
Image upload → Flask → Pillow/OpenCV/NumPy preprocessing → PyTorch/YOLOv7 inference → color-threshold categorization → annotated image and JSON summary.

**Technology stack**  
Python, Flask, PyTorch, YOLOv7, OpenCV, NumPy, Pillow.

**Current result**  
The source implements an inference flow, but this review did not run it, inspect its model weights, or find evaluation results. Do not claim measured accuracy or validated tree-health assessment.

**Limitations**  
The model requires a compatible `.pt` weight file. The health labels use simple color thresholds and should be described as heuristics. Results are written to a fixed file path, which can cause collisions across simultaneous requests. README setup instructions include placeholder repository information.

**Future work (proposed, not completed)**  
Provide reproducible model setup, isolate generated outputs per request, validate the health classifier against labeled data, report detection metrics only after a reproducible evaluation, and test the upload flow.

**Links**  
[GitHub repository](https://github.com/Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7) · Demo: Not Available.

## 3. Certification descriptions

These entries are listed on the public LinkedIn profile. They are **profile claims**, not independently issuer-verified credentials. Verification URLs and expiration dates were not exposed in the public snippet. Link the title to the LinkedIn profile for now, not to an invented certificate URL. Publish only after confirming the details and supplying issuer links or certificate files where available.

| Portfolio title | Issuer | LinkedIn issue date | Credential ID | Suggested neutral description | Link/status |
|---|---|---|---|---|---|
| Basics of internet | GUVI Geek Networks, IITM Research Park | Jul 2022 | `171b58W753sM60jd18` | Credential listed on LinkedIn under this title; course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Elements of AI | University of Helsinki | Jul 2022 | `txzo99xnzo` | Credential listed on LinkedIn under this title; course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Fundamentals of digital marketing | Google | Jul 2022 | `7SV PQM CGZ` | Credential listed on LinkedIn under this title; course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Game development using Pygame | GUVI Geek Networks, IITM Research Park | Jul 2022 | `57K0hI2618Fs8C52B6` | Credential listed on LinkedIn under this title; course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| HTML workshop | GeeksforGeeks | Jul 2022 | Not Available | Workshop listed on LinkedIn under this title; certificate details not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Presentation skills | TCS iON | Jul 2022 | `66756-22599119-1016` | Credential listed on LinkedIn under this title; course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Python | GUVI Geek Networks, IITM Research Park | Jul 2022 | `s5C153ME7YZ6170i16` | Credential listed on LinkedIn under this title; course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Adobe Premiere Pro CC Video Editing Course Beginners To Pro | Udemy | Not Available | Not Available | Credential listed on LinkedIn under this title; date and course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Avid Media Composer First for Beginners | Udemy | Not Available | Not Available | Credential listed on LinkedIn under this title; date and course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |
| Essential programs in JAVA zero to hero | LetsUpgrade | Not Available | Not Available | Credential listed on LinkedIn under this title; date and course scope not independently verified. | [LinkedIn profile](https://in.linkedin.com/in/yash-chaudhary-791835239) · issuer verification unavailable |

## 4. Technical skills by domain

Use the labels below to distinguish code observed in public repositories from technologies named only in profile posts or READMEs.

### Supported by inspected source

- **Programming:** Python; TypeScript/TSX (present in the image-restoration repository, whose project provenance and AI claims need confirmation).
- **Backend/API:** FastAPI, Flask, Streamlit.
- **Databases and retrieval:** SQLite, SQLAlchemy, Qdrant, vector similarity search.
- **Machine learning and computer vision:** PyTorch, YOLOv7, OpenCV, NumPy, pandas; Hugging Face Sentence Transformers (`all-MiniLM-L6-v2`).
- **Generative AI integration:** Amazon Bedrock `retrieve_and_generate` API call in the Knowledge Base Q&A source.
- **Frontend:** React, Next.js, Vite, HTML/CSS/JavaScript (React/Next stack is source-observed; some HTML/CSS details are documented rather than individually inspected).

### Mentioned in public profile posts or READMEs, but not fully verified in implementation

Amazon OpenSearch Serverless, Amazon Titan Embeddings V2, Claude 3.5 Sonnet, Mistral Large, LangChain, Google Gemini 2.5 Flash, Prefect, MLflow, Optuna, Scikit-learn, AWS deployment, Kotlin. Describe these as exposure/project-stack mentions only until the associated source or deployment is reviewed.

### Not evidenced in reviewed repositories

Semantic caching, cache hit-rate/latency/cost evaluation, validated ML benchmarks, and production deployment were not verified.

## 5. Professional About section — draft

> I’m an aspiring AI/ML engineer interested in building practical applications with machine learning, generative AI, and language models. My projects explore Python APIs, data-backed applications, semantic search with embeddings and vector storage, and computer-vision workflows. I’m particularly interested in making retrieval-based systems useful and traceable, and in strengthening the engineering around them through secure design, evaluation, and reliable deployment. I’m seeking an AI/ML internship where I can contribute to applied projects while continuing to grow as a software engineer.

**Confirmation needed before publishing:** confirm that this first-person summary accurately reflects your own work and current goals. Do not add a degree, academic dates, employment/client claims, measured results, or claims of production deployment from the currently reviewed sources. LinkedIn's education entries are incomplete and potentially inconsistent.

## 6. Profile and project links

- **GitHub profile:** [github.com/Yashyc27](https://github.com/Yashyc27)
- **LinkedIn profile:** [linkedin.com/in/yash-chaudhary-791835239](https://www.linkedin.com/in/yash-chaudhary-791835239/)
- **Financial Document Management:** [GitHub repository](https://github.com/Yashyc27/Financial-Document-Management-with-Semantic-Analysis) · demo unavailable.
- **Enterprise Knowledge Base Q&A:** [GitHub repository](https://github.com/Yashyc27/Enterprise-Knowledge-Base-Q-A-System) · demo unavailable.
- **Tree Detection and Health Analysis:** [GitHub repository](https://github.com/Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7) · demo unavailable.
- **Certificates:** issuer verification URLs unavailable from public LinkedIn data. The LinkedIn profile can be linked as the source listing, but should not be represented as issuer verification.

## Review notes

This draft is not website content yet. It intentionally omits unverified degrees, experience, client names, demo links, performance results, and skill endorsements. Confirm personal authorship/contribution, credential records, current education, and the About copy before publishing.
