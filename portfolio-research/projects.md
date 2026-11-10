# Public GitHub project audit

**Profile:** [github.com/Yashyc27](https://github.com/Yashyc27)  
**Reviewed:** 2026-11-10  
**Scope:** Public repositories only. Read accessible READMEs and inspected source/dependency files for the most relevant projects. No repositories or website files were changed. No live demo was confirmed unless explicitly stated.

## Summary

- The strongest evidence of relevant engineering work is in **Financial-Document-Management-with-Semantic-Analysis** (working semantic retrieval prototype with an API and database) and **Enterprise-Knowledge-Base-Q-A-System** (a Bedrock retrieval-and-generation Streamlit app). Both need material accuracy/security fixes before being presented as polished portfolio projects.
- **Yonex-Sentiment-MLOps-Pipeline-** may be a strong supporting project based on the public LinkedIn post, but its repository README and source could not be retrieved from the accessible GitHub file/search interface. It is not assessed as verified implementation here.
- I found no public repository evidence for semantic caching. The financial document project does semantic vector retrieval, but no cache or cache evaluation was found in the inspected README/source.
- No verified deployed demo URL was found for the projects below. Localhost run instructions are not live demos.
- No repository is classified **A: Featured and portfolio-ready** on the evidence reviewed. Two good candidates are held in **D: Needs improvement** until the documented caveats are resolved.

## A. Featured projects

**None currently ready to feature based on this review.** The closest candidates are in section D: the financial semantic-search/RAG prototype and Bedrock knowledge-base chat app. Their topic fit is strong, but reliability, security, attribution, or documentation issues make an unqualified showcase misleading today.

## B. Supporting projects

### Tree-Detection-and-Health-Analysis-Using-YOLOv7

- **Description / problem:** Upload an aerial or satellite image, detect trees, count detections, draw boxes, and estimate crown health categories.
- **README:** Describes YOLOv7 + Flask, HTML/CSS/JS, with optional React; says a `.pt` weights file must be supplied. Setup instructions contain placeholder clone owner/repository text and inconsistent formatting.
- **Languages / stack:** Python observed in `app.py`; Flask, PyTorch/YOLOv7, OpenCV, NumPy, Pillow. README mentions HTML/CSS/JavaScript. GitHub language percentages were not retrieved.
- **Structure:** README describes `app.py`, `models/`, `static/`, `templates/`, `requirements.txt`; inspected source dynamically searches the current directory for any `.pt` file rather than loading from the documented `models/` path.
- **Features / implementation:** Flask accepts an uploaded image, runs YOLOv7 inference, filters class 0, draws boxes, and counts trees. Crown health is assigned by simple average BGR color thresholds; output image is written to a fixed `static/result.jpg` path.
- **GitHub:** [Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7](https://github.com/Yashyc27/Tree-Detection-and-Health-Analysis-Using-YOLOv7)
- **Live demo:** Not found.
- **Completion:** Prototype; runtime requires a compatible `.pt` model and YOLOv7 hub dependency. The health estimate is a color heuristic, not a validated plant-health model. README says video/map work is future scope.
- **Classification:** **B Supporting**; useful computer-vision/ML breadth, but document the heuristic plainly and improve setup/output handling before promotion.

### House-Price-Prediction.

- **Description / problem:** Web form for estimating Indian house prices from area, BHK, city tier, and property attributes.
- **README:** Claims an XGBoost regression web app using Flask with HTML/CSS/JS, describes pages and a folder structure, and documents local setup. README says install `requirements.txt`, but that file was not present at the inspected repository path (GitHub returned 404).
- **Languages / stack:** Python in inspected `app.py`; Flask, pandas, a pickle-loaded XGBoost model. README describes HTML/CSS/JavaScript. GitHub language percentages unavailable.
- **Structure:** README describes `static/`, `templates/`, `models/`, `app.py`, and requirements; source loads `data.pkl` from the repository root, which differs from the documented `models/` location.
- **Features / implementation:** Flask routes render home/about/contact/FAQ/predict pages; prediction builds a seven-column pandas DataFrame and calls the deserialized model. Contact form only renders a success response; the source says it does not save or send the message.
- **GitHub:** [Yashyc27/House-Price-Prediction.](https://github.com/Yashyc27/House-Price-Prediction.)
- **Live demo:** Not found.
- **Completion:** Local app prototype; README/setup mismatch and the inspected `__main__` block ends with `app.run` without calling it, so the documented `python app.py` run path appears incomplete.
- **Classification:** **B Supporting** (academic/classical ML), with setup and documentation improvements needed.

### Employee-Salary-Prediction-Using-Machine-Learning

- **Description / problem:** Predict salary from age, gender, education, job category, and years of experience.
- **README:** Describes a Streamlit application, Random Forest regression, preprocessing, plots, and metric evaluation. Its metrics are explicitly illustrative examples, not actual measured results. README provides inconsistent clone naming and says to create `requirements.txt` if missing.
- **Languages / stack:** Python observed in `app.py`; Flask and pandas; pickle-loaded Random Forest model. README instead claims Streamlit, scikit-learn training, Tailwind, and visualizations. GitHub language percentages unavailable.
- **Structure:** README lists `app.py`, `Salary_Data.csv`, `requirements.txt`, `index.html`, and `style.css`; source code uses Flask templates and `random_forest_model.pkl`. Requirements file fetch returned 404.
- **Features / implementation:** Flask form reads numeric/category codes, constructs a fixed-order DataFrame, calls the saved model, and renders the prediction. Exceptions are returned to the page.
- **GitHub:** [Yashyc27/Employee-Salary-Prediction-Using-Machine-Learning](https://github.com/Yashyc27/Employee-Salary-Prediction-Using-Machine-Learning)
- **Live demo:** Not found.
- **Completion:** Incomplete or inconsistently documented prototype; model artifact, dataset, installation requirements, and interface description need reconciliation. No performance claim should be quoted from the README examples.
- **Classification:** **B Supporting** (academic ML), but currently a weak portfolio demonstration until the implementation and README agree.

### Elder_Care

- **Description / problem:** A healthcare appointment and elder support application. README claims a chatbot-based booking flow with web and Android clients.
- **README:** Gives setup for a React frontend and Flask backend, plus Kotlin mobile app claims. Its clone URL points to a different account/repository, so setup instructions are not reliable as written.
- **Languages / stack:** Python Flask backend observed; React/Vite frontend confirmed by `package.json`; Kotlin is claimed in README but source was not inspected. The backend requirements file contains only commented-out packages.
- **Structure:** `backend/app.py` imports route packages for auth, schedule, relations, chat, and location; `frontend/package.json` configures a Vite/React app. Full tree was not available through the connector.
- **Features / implementation:** App entrypoint enables CORS and imports the route modules. README claims appointment booking and chatbot support; those features were not individually inspected or verified in this audit.
- **GitHub:** [Yashyc27/Elder_Care](https://github.com/Yashyc27/Elder_Care)
- **Live demo:** Not found.
- **Completion:** A multi-part application is present, but operational status is unverified. Python dependency declaration is commented out, and the README clone instructions are mismatched.
- **Classification:** **B Supporting** for broader software engineering; chatbot/AI claims need source-level verification before presenting as AI work.

## C. Academic / learning projects

### Innomatics-Nov-2025-Intership

- **Description / problem:** The repository name suggests internship/coursework material; no repository README was retrievable, so the purpose and task details cannot be established from its name alone.
- **README / structure / languages / frameworks / features / implementation:** README fetch returned 404; source tree and files were not accessible through the available connector. **Not Available / not verified.**
- **GitHub:** [Yashyc27/Innomatics-Nov-2025-Intership](https://github.com/Yashyc27/Innomatics-Nov-2025-Intership)
- **Live demo:** Not found.
- **Completion:** Not assessable from accessible files.
- **Classification:** **C Academic / learning, provisional only**; inspect repository files and add a project-level README before deciding whether it belongs in the portfolio.

### Technohack-intership

- **Description / problem:** No README/source contents were inspected in this pass; repository name alone is insufficient to infer project scope.
- **README / structure / languages / frameworks / features / implementation:** Not Available from reviewed evidence.
- **GitHub:** [Yashyc27/Technohack-intership](https://github.com/Yashyc27/Technohack-intership)
- **Live demo:** Not found.
- **Completion:** Not assessed.
- **Classification:** **C Academic / learning, provisional only**; needs source inspection and a clear README.

## D. Projects needing improvement before portfolio use

### Financial-Document-Management-with-Semantic-Analysis

- **Description / problem:** Store financial document metadata and retrieve relevant passages by semantic similarity, rather than exact keyword matching. Despite the repository’s name, inspected source does not implement semantic caching.
- **README:** Detailed and mostly aligned with source; openly calls the project work in progress and records important limitations.
- **Languages / stack:** Python; FastAPI, SQLAlchemy, SQLite, Qdrant, LangChain text splitters/vector store, Hugging Face `all-MiniLM-L6-v2`, Uvicorn. Dependencies are listed in `requirements.txt`.
- **Structure:** `main.py` (routes), `rag_engine.py` (chunking/embedding/vector retrieval), `database.py` (SQLite models), `auth.py` (role helper), `models.py` (reserved), `requirements.txt`; `financial_app.db` is runtime-created.
- **Features / implementation:** Upload reads UTF-8 text, stores metadata in SQLite, chunks at 700 characters with 70 overlap, embeds and indexes in an in-memory Qdrant client, retrieves 20 and returns the first 5. Search returns passages and metadata; there is no LLM answer-generation step in the inspected code. A context endpoint returns a hard-coded placeholder.
- **Code-level concerns:** Login returns a dummy token; passwords are stored in plaintext; a hardcoded secret exists in `auth.py`; roles are not enforced on document routes; vector data is memory-only; deletion uses a Qdrant metadata filter that should be tested; document upload has no content-type/size handling. Do not use real financial data with this prototype.
- **GitHub:** [Yashyc27/Financial-Document-Management-with-Semantic-Analysis](https://github.com/Yashyc27/Financial-Document-Management-with-Semantic-Analysis)
- **Live demo:** Not found; local API instructions only.
- **Completion:** Explicit work in progress / local demo.
- **Classification:** **D Needs improvement**. Strongest inspected evidence for Python, database, embeddings, vector search, and RAG-adjacent backend skills, but describe it precisely as semantic retrieval unless generation is added.

### Enterprise-Knowledge-Base-Q-A-System

- **Description / problem:** Streamlit chat UI calls Amazon Bedrock `retrieve_and_generate` to answer questions about a configured knowledge base and displays retrieved citations.
- **README:** Presents an “Enterprise” deployment guide and “TechNova Corporation” internal deployment framing, sample company bucket/document names, IAM configuration, and EC2 deployment. Treat that wording as sample configuration, not proof of an actual client or production deployment.
- **Languages / stack:** Python observed in `app.py`; Streamlit, boto3/botocore, Amazon Bedrock Knowledge Bases. README architecture also names S3, Titan embeddings, Claude, and OpenSearch Serverless. Requirements list Streamlit and boto3. GitHub language percentages not retrieved.
- **Structure:** README describes `app.py`, `requirements.txt`, and `docs/TechNova_Enterprise_Policy_Handbook.pdf`; only `app.py`, `requirements.txt`, and README were inspected. Actual repo tree was not available via the file connector.
- **Features / implementation:** Streamlit session state stores chat messages and a count; the app submits user input to Bedrock retrieval/generation, parses returned references, and renders source excerpts. AWS region, knowledge-base ID, and model ARN are hard-coded in source. README and source differ: README diagram/instructions refer to Claude 3.5 Sonnet/Titan, while source uses Amazon Titan Text Express as the generation model.
- **GitHub:** [Yashyc27/Enterprise-Knowledge-Base-Q-A-System](https://github.com/Yashyc27/Enterprise-Knowledge-Base-Q-A-System)
- **Live demo:** Not found; setup instructions describe a possible EC2 deployment but do not prove it is deployed.
- **Completion:** Prototype/deployment guide; AWS resources and successful end-to-end operation were not verifiable.
- **Classification:** **D Needs improvement**. High GenAI/RAG relevance, but resolve sample-company attribution, model/config inconsistencies, hard-coded resource IDs, and deployment evidence before showcasing it as a real enterprise deployment.

### Image-restoration-using-Gen-AI-

- **Description / problem:** Repository README describes restoring old/blurry portraits with GFPGAN and a Next.js API. The source inspected does not support that description for the main `/restore` flow.
- **README:** Claims GFPGAN face restoration; repository About section has no description/site. The config redirects `/github` and `/twitter` to `llegomark`’s accounts, and README branding refers to RestorePhotos.app, so ownership/provenance should be clarified before claiming original authorship.
- **Languages / stack:** GitHub reports TypeScript 94.2%, CSS 3.8%, JavaScript 2.0%. `package.json` confirms Next.js, React, Tailwind, TypeScript, and numerous UI/upload packages.
- **Structure:** `public/`, `src/`, `styles/`, Next config, package manifests, TypeScript/Tailwind config. Inspected `src/pages/index.tsx` and `src/pages/restore.tsx`.
- **Features / implementation:** Landing page offers restoration and captions. `/restore` accepts JPEG/PNG through `react-uploader`, loads the hosted image into a browser canvas, increases RGB values and applies a simple neighboring-pixel adjustment, then offers preview/download. This is not a GFPGAN invocation in the inspected page. No actual `/api/restore.ts` file existed at the expected path (404).
- **GitHub:** [Yashyc27/Image-restoration-using-Gen-AI-](https://github.com/Yashyc27/Image-restoration-using-Gen-AI-)
- **Live demo:** Not found.
- **Completion:** UI prototype; the model claim and implementation do not match in the inspected flow. No release is published.
- **Classification:** **D Needs improvement** (or exclude until provenance and AI implementation are clarified). Do not label it a GenAI/GFPGAN project based on the current inspected code.

## E. Not suitable for the AI/ML portfolio as currently documented

### Carpooling

- **Description / problem:** README contains only `# carpool_frontend`; no meaningful explanation or technical documentation was available.
- **README / languages / frameworks / structure / features / implementation:** README alone does not establish them; not assessed beyond that content.
- **GitHub:** [Yashyc27/Carpooling](https://github.com/Yashyc27/Carpooling)
- **Live demo:** Not found. **Completion:** Not assessable.
- **Classification:** **E Not suitable for this AI/ML-focused portfolio currently**; a conventional product app could still fit a general software portfolio after documentation and source review.

### test

- **Description / problem / README / source:** Repository is public, but no portfolio-relevant project information or implementation was established in the reviewed listing. The README/source were not inspected.
- **GitHub:** [Yashyc27/test](https://github.com/Yashyc27/test)
- **Live demo / completion:** Not found / not assessable.
- **Classification:** **E Not suitable**, based on no verified portfolio project evidence.

## Repository with missing implementation evidence

### Yonex-Sentiment-MLOps-Pipeline-

- **Description / problem:** A public LinkedIn project post describes a product-review sentiment pipeline using Prefect, MLflow, Optuna, Flask, Scikit-learn, and AWS, but those are profile-post claims, not repository-verified implementation details.
- **README / source / structure / languages:** README and common source searches returned no result through the available GitHub file/search connector; repository metadata confirms it is public, but no source files were inspected. This is an access/index limitation, not proof the repository is empty.
- **Features / implementation / completion:** Not verifiable from the repository contents reviewed. No actual measurements or 100% reproducibility claim is verified here.
- **GitHub:** [Yashyc27/Yonex-Sentiment-MLOps-Pipeline-](https://github.com/Yashyc27/Yonex-Sentiment-MLOps-Pipeline-)
- **Live demo:** Not found.
- **Classification:** **D Needs inspection before use**. It could be a useful supporting ML/MLOps project if source and reproducible run instructions substantiate the public description.

## Recommendation for portfolio selection

1. **Prioritize next:** resolve and harden the financial semantic-search project, then describe the implemented retrieval pipeline accurately. Add real persistence, secure auth/authorization, document validation, tests, and a clear distinction between retrieval and generation.
2. **Potential GenAI feature:** make the Bedrock app demonstrably runnable, remove unsupported client/confidentiality framing, externalize configuration, align README and code, and provide a safe demo or screenshots with no real private data.
3. **Verify before claiming:** inspect the Yonex repository contents; it may better demonstrate end-to-end ML/MLOps than the older prediction demos.
4. **Supporting breadth:** tree detection (with explicit color-heuristic caveat), then one of house-price or salary prediction after setup/docs are repaired. Avoid displaying both similar basic prediction apps unless they demonstrate materially different work.
5. **Do not feature yet:** Image restoration as a GenAI/GFPGAN project until implementation and provenance match the claim; current source flow is a browser-side image adjustment.

## Review limits

The connected GitHub API exposed public repository metadata and file fetches, but not reliable directory listings or language statistics for every repository. I inspected the source files named above where fetchable. Missing files, descriptions, demo URLs, and completion evidence are marked unavailable rather than inferred. No application was run, no demos were tested, and no model metrics were reproduced.
