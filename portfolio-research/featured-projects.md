# Ranked AI/ML Portfolio Shortlist

**Prepared:** 2026-11-10  
**Evidence source:** `projects.md` and source files fetched from the public repositories listed below. Scores rate the project evidence currently visible, not the potential after future improvements. Higher is stronger. A low implementation score reflects the current prototype's gaps, even when its topic is highly relevant.

## Ranking

| Rank | Project | Complexity | AI/ML relevance | Implementation quality | Documentation | Originality | Internship relevance | Total / 30 |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Financial Document Management with Semantic Analysis | 3 | 4 | 2 | 4 | 3 | 4 | **20** |
| 2 | Enterprise Knowledge Base Q&A — Amazon Bedrock | 3 | 5 | 2 | 3 | 2 | 4 | **19** |
| 3 | Tree Detection and Health Analysis using YOLOv7 | 4 | 4 | 2 | 2 | 3 | 3 | **18** |

**Selection decision:** These are the strongest three projects with source-level evidence available. None is ready for an unqualified “production-ready” claim. Financial document retrieval ranks first because its API, persistence layer, embedding, and vector retrieval components are visible in code; it does not currently generate LLM answers. The Bedrock app has genuine retrieval-and-generation integration in its inspected code, but relies on configured external AWS resources and has misleading sample-company framing/config differences. Tree detection demonstrates a model inference path, but the health assessment is a basic color heuristic.

**Not scored:** `Yonex-Sentiment-MLOps-Pipeline-` could be relevant, but source and README were not retrievable. Its public LinkedIn description is insufficient to score implementation quality. No reviewed repository demonstrates semantic caching.

---

## 1. Financial Document Management with Semantic Analysis

- **Short description:** A Python API prototype for uploading text-based financial documents, storing their metadata, and retrieving semantically similar passages.
- **Problem statement:** Keyword-only search can fail when the user's wording differs from the document's wording. Financial documents also need searchable metadata and passage provenance.
- **Solution:** Store document records in SQLite, split text into chunks, embed each chunk, and use Qdrant similarity search to return relevant text with document metadata.
- **Technologies:** Python, FastAPI, SQLAlchemy, SQLite, Qdrant, LangChain text splitter/vector-store integration, Hugging Face Sentence Transformers (`all-MiniLM-L6-v2`), Uvicorn.
- **Key features evidenced in code:** Text-file upload; document metadata CRUD; semantic retrieval endpoint; 700-character chunks with 70-character overlap; top-20 candidate search with five results returned; document IDs attached as metadata.
- **Architecture:** HTTP client → FastAPI routes → SQLite/SQLAlchemy for user and document records; indexing/search routes → text splitter → Hugging Face embeddings → in-memory Qdrant vector store → passage results.
- **Important boundary:** Current implementation retrieves passages; it does **not** call an LLM to draft a response. No semantic cache or benchmark results were found. Qdrant is in-memory, auth is placeholder/insecure, and roles are not enforced, so this is a local prototype only.
- **GitHub repository:** [Yashyc27/Financial-Document-Management-with-Semantic-Analysis](https://github.com/Yashyc27/Financial-Document-Management-with-Semantic-Analysis)
- **Demo link:** Not Available; no deployed demo was found.
- **Current completion status:** Work in progress / local prototype. Improve persistence, auth, authorization, input validation, tests, and document-specific context retrieval before describing as a complete RAG application.

## 2. Enterprise Knowledge Base Q&A — Amazon Bedrock

- **Short description:** A Streamlit chat interface that submits questions to Amazon Bedrock Knowledge Bases and displays generated answers with retrieved source excerpts.
- **Problem statement:** Users need a conversational way to search a document knowledge base and see the source material behind responses.
- **Solution:** Call Bedrock's `retrieve_and_generate` API, preserve messages in Streamlit session state, parse returned citations, and render the source snippets in the UI.
- **Technologies:** Python, Streamlit, boto3/botocore, Amazon Bedrock Knowledge Bases. The README describes an intended AWS setup with S3, OpenSearch Serverless, and embeddings; successful provisioning was not verified.
- **Key features evidenced in code:** Chat input; session message history; Bedrock retrieval/generation call; citation extraction/display; request error display; clear-chat control.
- **Architecture:** Streamlit client/UI → boto3 Bedrock Agent Runtime → configured Knowledge Base and foundation model → generated response plus retrieved references → chat and citation rendering. The README's EC2/IAM/S3/OpenSearch deployment is a setup guide, not verified deployment evidence.
- **Important boundary:** Do not imply TechNova Corporation is a real client or production user without confirmation. The source hard-codes AWS region, knowledge-base ID, and a Titan Text Express model ARN; README architecture/configuration also mentions Claude 3.5 Sonnet/Titan embeddings. These details need alignment and should be externalized.
- **GitHub repository:** [Yashyc27/Enterprise-Knowledge-Base-Q-A-System](https://github.com/Yashyc27/Enterprise-Knowledge-Base-Q-A-System)
- **Demo link:** Not Available; deployment is not verified.
- **Current completion status:** Prototype/deployment guide. End-to-end operation against a live AWS knowledge base was not tested. Validate setup, remove unsupported company/confidentiality claims, align README with the actual model, and avoid exposing real resource identifiers before featuring.

## 3. Tree Detection and Health Analysis using YOLOv7

- **Short description:** A Flask image-upload prototype that detects trees in aerial imagery, draws bounding boxes, counts detections, and labels crown color categories.
- **Problem statement:** Manual review of aerial or satellite imagery to locate/count trees and flag visual differences is labor-intensive.
- **Solution:** Run YOLOv7 inference on uploaded images, retain class-0 boxes, then apply a simple average-color heuristic to assign a crown category.
- **Technologies:** Python, Flask, PyTorch/YOLOv7, OpenCV, NumPy, Pillow; README describes HTML/CSS/JavaScript frontend assets.
- **Key features evidenced in code:** JPEG/PNG upload flow; object detection; bounding box rendering; tree count and area percentage; Healthy/Moderate/Unhealthy/Uncertain color-heuristic labels; result image saved for viewing.
- **Architecture:** Browser upload → Flask route → image decode/preprocessing (Pillow/NumPy/OpenCV) → YOLOv7 model inference → color-threshold classification → output image and summary JSON.
- **Important boundary:** Health categories are inferred from simple color thresholds, not validated health labels. Runtime needs compatible `.pt` weights; model weights/evaluation and reliable deployment were not confirmed. Fixed output filename may collide under concurrent requests.
- **GitHub repository:** [Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7](https://github.com/Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7)
- **Demo link:** Not Available; no deployed demo was found.
- **Current completion status:** Prototype; README lists video/map support as future work. Improve setup documentation, model handling, per-request output isolation, and validation/evaluation before promotion.

## Suggested portfolio presentation order

1. Lead with Financial Document Management as backend/data engineering plus semantic retrieval; label it a prototype and distinguish retrieval from generation.
2. Follow with the Bedrock knowledge-base application to show cloud GenAI integration, after cleaning up the sample-company language and verifying its configuration.
3. Use Tree Detection as a computer-vision supporting project with the color-heuristic limitation stated clearly.

