# KCNA Batch 3 — Curated Specific URLs

Questions 201-292 with manually curated, question-specific external URLs and targeted review notes where clarification improves precision.

### Q201: What is OCI (Open Container Initiative)?

A. A cloud provider organization  
B. A standards organization that defines container image and runtime specifications  
C. A Kubernetes networking standard  
D. A container monitoring protocol  

**Correct Answer:** B. A standards organization that defines container image and runtime specifications

> **Explanation:** The OCI defines open standards for container formats (image-spec), runtime (runtime-spec), and distribution (distribution-spec). This ensures containers built with one tool run on any OCI-compliant runtime.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://argo-cd.readthedocs.io/en/stable/](https://argo-cd.readthedocs.io/en/stable/)

**Review Note:** Argo CD was selected as the canonical GitOps controller reference when the question is tool-specific rather than principle-specific.

---

### Q202: What is Tekton?

A. A service mesh for Kubernetes  
B. A cloud-native CI/CD pipeline framework for Kubernetes  
C. A storage provisioner  
D. A network policy tool  

**Correct Answer:** B. A cloud-native CI/CD pipeline framework for Kubernetes

> **Explanation:** Tekton is a CNCF project providing Kubernetes-native CI/CD building blocks. It defines custom resources (Pipeline, Task, TaskRun, PipelineRun) to build flexible cloud-native pipelines.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/](https://kubernetes.io/docs/concepts/containers/images/)

---

### Q203: What does kubectl kustomize do?

A. Lists all custom resources  
B. Builds a set of kustomized Kubernetes manifests from a kustomization.yaml file  
C. Checks cluster health  
D. Generates Helm charts  

**Correct Answer:** B. Builds a set of kustomized Kubernetes manifests from a kustomization.yaml file

> **Explanation:** kubectl kustomize <dir> (or kubectl apply -k <dir>) reads a kustomization.yaml and outputs the final merged/patched manifests for review or application.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kustomize.io/](https://kustomize.io/)

---

### Q204: What is a container image tag and why does :latest cause problems?

A. :latest is the most secure tag  
B. :latest is mutable and can point to different images over time, causing unpredictability  
C. :latest images are larger than versioned images  
D. :latest only works with private registries  

**Correct Answer:** B. :latest is mutable and can point to different images over time, causing unpredictability

> **Explanation:** The :latest tag is automatically used when no tag is specified, but it's mutable. Production deployments should use specific version tags or image digests to ensure reproducibility.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opengitops.dev/](https://opengitops.dev/)

---

### Q205: What is a Dockerfile?

A. A script for orchestrating containers  
B. A text file with instructions for building a container image  
C. A Kubernetes manifest for pod creation  
D. A configuration file for the Docker daemon  

**Correct Answer:** B. A text file with instructions for building a container image

> **Explanation:** A Dockerfile contains instructions (FROM, RUN, COPY, CMD, EXPOSE, ENV) that the docker build command executes sequentially to create a container image.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/observability-primer/](https://opentelemetry.io/docs/concepts/observability-primer/)

---

### Q206: What is a multi-stage Docker build?

A. A build that runs on multiple nodes  
B. A build using multiple FROM instructions to produce smaller final images  
C. A build that creates multiple images simultaneously  
D. A build with multiple Dockerfiles  

**Correct Answer:** B. A build using multiple FROM instructions to produce smaller final images

> **Explanation:** Multi-stage builds use multiple FROM statements. Intermediate stages compile code or install tools; the final stage copies only the artifacts needed to run the app, drastically reducing image size.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

---

### Q207: What is the purpose of .dockerignore?

A. To block Docker from running on certain systems  
B. To exclude files from the Docker build context  
C. To ignore Docker warnings  
D. To skip image layers during build  

**Correct Answer:** B. To exclude files from the Docker build context

> **Explanation:** Similar to .gitignore, .dockerignore prevents unnecessary files (node_modules, .git, build artifacts) from being sent to the Docker daemon, speeding up builds and reducing image size.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q208: What is image vulnerability scanning?

A. Monitoring running containers for security threats  
B. Analyzing container images for known security vulnerabilities before deployment  
C. Encrypting container images at rest  
D. Checking image signatures  

**Correct Answer:** B. Analyzing container images for known security vulnerabilities before deployment

> **Explanation:** Image scanning tools (Trivy, Snyk, Clair, Anchore) analyze image layers and packages against vulnerability databases (CVE). Scanning in CI pipelines prevents vulnerable images from reaching production.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://grafana.com/oss/grafana/](https://grafana.com/oss/grafana/)

---

### Q209: What is supply chain security in cloud-native?

A. Securing the physical supply chain for hardware  
B. Ensuring the integrity and security of software artifacts from source code to deployment  
C. Managing vendor contracts  
D. Securing Kubernetes API access  

**Correct Answer:** B. Ensuring the integrity and security of software artifacts from source code to deployment

> **Explanation:** Supply chain security covers protecting the entire software delivery pipeline: source code integrity (git signing), image signing (Cosign/Notary), SBOM generation, and provenance verification (SLSA framework).

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.fluentd.org/architecture](https://www.fluentd.org/architecture)

---

### Q210: What is Cosign used for?

A. Signing Git commits  
B. Signing and verifying container images  
C. Encrypting Kubernetes secrets  
D. Generating TLS certificates  

**Correct Answer:** B. Signing and verifying container images

> **Explanation:** Cosign (part of the Sigstore project, CNCF) allows signing container images and verifying their authenticity. Integrates with OCI registries and Kubernetes admission controllers.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.cncf.io/training/certification/kcna/](https://www.cncf.io/training/certification/kcna/)

**Review Note:** KCNA itself is a certification artifact, so the canonical reference is the CNCF certification page rather than Kubernetes documentation.

---

### Q211: What is a Software Bill of Materials (SBOM)?

A. A Kubernetes resource listing pod components  
B. An inventory of all software components and dependencies in a container image  
C. A budget document for software licenses  
D. A Dockerfile alternative  

**Correct Answer:** B. An inventory of all software components and dependencies in a container image

> **Explanation:** An SBOM lists all packages, libraries, and dependencies in a software artifact. It enables security teams to quickly identify vulnerable components when new CVEs are published.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://landscape.cncf.io/guide#what-is-the-cloud-native-landscape](https://landscape.cncf.io/guide#what-is-the-cloud-native-landscape)

---

### Q212: What is a Kubernetes admission webhook?

A. A webhook for external event notifications  
B. A server that receives admission controller requests and can validate or mutate objects  
C. A monitoring alert webhook  
D. A CI/CD trigger webhook  

**Correct Answer:** B. A server that receives admission controller requests and can validate or mutate objects

> **Explanation:** Admission webhooks (MutatingAdmissionWebhook, ValidatingAdmissionWebhook) allow external servers to inspect and modify (or reject) Kubernetes API requests. Used by tools like OPA/Gatekeeper, Kyverno.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://istio.io/latest/docs/concepts/what-is-istio/#what-is-a-service-mesh](https://istio.io/latest/docs/concepts/what-is-istio/#what-is-a-service-mesh)

---

### Q213: What is ArgoCD's sync operation?

A. Backing up cluster state to Git  
B. Applying the desired state from Git to the cluster  
C. Synchronizing cluster clocks  
D. Replicating state across clusters  

**Correct Answer:** B. Applying the desired state from Git to the cluster

> **Explanation:** An ArgoCD sync applies the manifests from the Git repository to the target Kubernetes cluster, reconciling the actual cluster state with the desired state defined in Git.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md](https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md)

**Review Note:** Cloud-native definition references the CNCF TAG App Delivery whitepaper because the concept is architectural, not a single Kubernetes feature.

---

### Q214: What does helm rollback do?

A. Rolls back the Helm CLI version  
B. Reverts a Helm release to a previous revision  
C. Removes a failed Helm chart  
D. Rolls back the Kubernetes cluster  

**Correct Answer:** B. Reverts a Helm release to a previous revision

> **Explanation:** helm rollback <release> <revision> reverts the release to the specified revision. Helm maintains release history; use helm history <release> to list available revisions.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://12factor.net/](https://12factor.net/)

---

### Q215: What is semantic versioning (SemVer) in container images?

A. Version numbers based on image size  
B. A versioning scheme (MAJOR.MINOR.PATCH) conveying compatibility information  
C. A container image naming standard  
D. A registry tagging requirement  

**Correct Answer:** B. A versioning scheme (MAJOR.MINOR.PATCH) conveying compatibility information

> **Explanation:** SemVer: MAJOR version for breaking changes, MINOR for backward-compatible new features, PATCH for backward-compatible bug fixes. Widely used for Helm charts and container images.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opengitops.dev/](https://opengitops.dev/)

---

### Q216: What is an OCI artifact?

A. An ancient computing artifact  
B. Any content (images, Helm charts, SBOMs, signatures) stored in an OCI-compliant registry  
C. A specific type of container image  
D. A Kubernetes cluster backup  

**Correct Answer:** B. Any content (images, Helm charts, SBOMs, signatures) stored in an OCI-compliant registry

> **Explanation:** OCI artifacts extend OCI distribution beyond container images. Helm 3 stores charts as OCI artifacts. Cosign stores signatures as OCI artifacts. This unifies storage for all supply chain artifacts.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opengitops.dev/](https://opengitops.dev/)

---

### Q217: What is the purpose of a Helm hook?

A. A network hook for external events  
B. A way to execute actions at specific points in a Helm release lifecycle (pre-install, post-upgrade, etc.)  
C. A hook into the Kubernetes API  
D. A container startup hook  

**Correct Answer:** B. A way to execute actions at specific points in a Helm release lifecycle (pre-install, post-upgrade, etc.)

> **Explanation:** Helm hooks use annotations to trigger Jobs or Pods at lifecycle events: pre-install, post-install, pre-upgrade, post-upgrade, pre-delete, post-delete. Useful for database migrations, backups, or tests.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/](https://gateway-api.sigs.k8s.io/)

**Review Note:** Gateway API references use the upstream SIG documentation because that is the canonical project home.

---

### Q218: What is ArgoCD ApplicationSet?

A. A collection of Argo Workflows  
B. A controller that automates deploying ArgoCD Applications across multiple clusters/namespaces  
C. A set of Helm charts managed by ArgoCD  
D. A GitOps backup mechanism  

**Correct Answer:** B. A controller that automates deploying ArgoCD Applications across multiple clusters/namespaces

> **Explanation:** ApplicationSet templates generate ArgoCD Application objects dynamically based on generators (cluster list, Git directory structure, matrix). Enables deploying to many clusters with a single definition.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/guides/](https://gateway-api.sigs.k8s.io/guides/)

---

### Q219: What is image promotion in a CI/CD pipeline?

A. Marketing container images on social media  
B. Moving a validated image through stages (dev → staging → production) by updating its tag or deploying it  
C. Increasing container image priority  
D. Upgrading image versions automatically  

**Correct Answer:** B. Moving a validated image through stages (dev → staging → production) by updating its tag or deploying it

> **Explanation:** Image promotion ensures the exact same image binary that passed tests in staging is deployed to production, maintaining immutability while progressing through environments.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://istio.io/latest/docs/concepts/what-is-istio/](https://istio.io/latest/docs/concepts/what-is-istio/)

---

### Q220: What does a pipeline-as-code approach mean?

A. Using low-code platforms for pipelines  
B. Defining CI/CD pipeline configuration in version-controlled code files alongside application code  
C. Writing pipeline logic in the same language as the app  
D. Using only CLI tools for pipelines  

**Correct Answer:** B. Defining CI/CD pipeline configuration in version-controlled code files alongside application code

> **Explanation:** Pipeline-as-code (Jenkinsfile, .github/workflows, .gitlab-ci.yml, Tekton YAML) treats pipeline definitions as first-class code artifacts: version-controlled, reviewed, tested, and auditable.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy](https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy)

---

### Q221: What is the primary purpose of ArgoCD?

A. Container image building  
B. GitOps continuous delivery for Kubernetes  
C. Log aggregation  
D. Network routing  

**Correct Answer:** B. GitOps continuous delivery for Kubernetes

> **Explanation:** ArgoCD is a declarative GitOps continuous delivery tool. It monitors Git repositories and automatically synchronizes the desired state to Kubernetes clusters.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://www.redhat.com/en/topics/containers/what-is-a-container-registry](https://www.redhat.com/en/topics/containers/what-is-a-container-registry)

**Review Note:** Container registry topics are broader than Kubernetes, so a container-domain explainer was used instead of a cluster-specific source.

---

### Q222: When should you use Helm?

A. To package and deploy Kubernetes applications using templates  
B. To monitor cluster performance  
C. To manage container images  
D. To configure network policies  

**Correct Answer:** A. To package and deploy Kubernetes applications using templates

> **Explanation:** Helm is a package manager for Kubernetes. It uses templates (charts) to define, install, and upgrade Kubernetes applications.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless](https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless)

**Review Note:** Serverless questions were anchored to vendor-neutral explainer material because the concept spans multiple platforms and runtimes.

---

### Q223: What is a Helm chart?

A. A performance monitoring tool  
B. A package of Kubernetes resources  
C. A network topology diagram  
D. A container image registry  

**Correct Answer:** B. A package of Kubernetes resources

> **Explanation:** A Helm chart is a collection of files that describe related Kubernetes resources. It includes templates, default values, and metadata.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://www.redhat.com/en/topics/devops/what-is-ci-cd](https://www.redhat.com/en/topics/devops/what-is-ci-cd)

---

### Q224: What is the main advantage of GitOps?

A. Faster container startup times  
B. Using Git as the single source of truth for infrastructure and applications  
C. Reduced storage costs  
D. Improved network performance  

**Correct Answer:** B. Using Git as the single source of truth for infrastructure and applications

> **Explanation:** GitOps core principles: Git is the source of truth, declarative configuration, automated synchronization, version control for infrastructure, audit trail via Git history.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://helm.sh/docs/topics/charts/](https://helm.sh/docs/topics/charts/)

---

### Q225: What is the purpose of an Ingress controller?

A. To manage container lifecycle  
B. To provide HTTP/HTTPS routing to services  
C. To schedule pods on nodes  
D. To store application secrets  

**Correct Answer:** B. To provide HTTP/HTTPS routing to services

> **Explanation:** Ingress controllers implement Ingress resources, providing HTTP/HTTPS routing, load balancing, SSL/TLS termination, and name-based virtual hosting.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://fluxcd.io/flux/concepts/](https://fluxcd.io/flux/concepts/)

---

### Q226: What advantage does Gateway API have over traditional Ingress?

A. Faster performance  
B. Lower resource usage  
C. Role-oriented design, multi-protocol support, and better extensibility  
D. Simpler configuration  

**Correct Answer:** C. Role-oriented design, multi-protocol support, and better extensibility

> **Explanation:** Gateway API advantages over Ingress: role-oriented, multi-protocol (HTTP, HTTPS, TCP, UDP, gRPC), extensible, cross-namespace routing, better traffic management.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://opengitops.dev/](https://opengitops.dev/)

---

### Q227: Which tool would you use to deploy applications to multiple Kubernetes clusters from a Git repository?

A. Helm  
B. ArgoCD  
C. kubectl  
D. Docker  

**Correct Answer:** B. ArgoCD

> **Explanation:** ArgoCD excels at multi-cluster management with Git as the source of truth. It can deploy to multiple clusters from a single Git repository.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/concepts/api-overview/](https://gateway-api.sigs.k8s.io/concepts/api-overview/)

---

### Q228: What is a key benefit of using declarative configuration for Kubernetes resources?

A. Faster execution  
B. Desired state can be version controlled and automatically reconciled  
C. Requires less storage  
D. Works without an API server  

**Correct Answer:** B. Desired state can be version controlled and automatically reconciled

> **Explanation:** Declarative configuration describes the desired state. Kubernetes controllers automatically reconcile actual state to match desired state.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/api-types/gatewayclass/](https://gateway-api.sigs.k8s.io/api-types/gatewayclass/)

---

### Q229: When would you choose ArgoCD over Helm?

A. For simple one-time deployments  
B. For GitOps-based continuous delivery across multiple clusters  
C. For building container images  
D. For monitoring applications  

**Correct Answer:** B. For GitOps-based continuous delivery across multiple clusters

> **Explanation:** Choose ArgoCD when you need: GitOps workflow, multi-cluster deployment, automatic synchronization, drift detection and auto-healing. Choose Helm for package management and templating.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/api-types/httproute/](https://gateway-api.sigs.k8s.io/api-types/httproute/)

---

### Q230: What is the main purpose of Helm?

A. To monitor Kubernetes clusters  
B. To package and manage Kubernetes applications  
C. To build container images  
D. To manage network policies  

**Correct Answer:** B. To package and manage Kubernetes applications

> **Explanation:** Helm is a package manager that: packages apps as charts, manages dependencies, supports versioning and rollback, provides templating for customization, enables sharing via repositories.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://argo-cd.readthedocs.io/en/stable/](https://argo-cd.readthedocs.io/en/stable/)

---

### Q231: What is stored in a Helm values file?

A. Container images  
B. Configuration parameters that can be customized  
C. Network policies  
D. User authentication tokens  

**Correct Answer:** B. Configuration parameters that can be customized

> **Explanation:** values.yaml contains default configuration values and parameters that can be overridden during installation. Install with custom values: helm install myapp mychart -f custom-values.yaml

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://www.cncf.io/projects/](https://www.cncf.io/projects/)

**Review Note:** CNCF project maturity is best sourced from the CNCF projects page rather than a secondary explainer.

---

### Q232: What is the primary benefit of using GitOps?

A. Faster container startup  
B. Declarative, version-controlled infrastructure and automatic synchronization  
C. Lower costs  
D. Simpler networking  

**Correct Answer:** B. Declarative, version-controlled infrastructure and automatic synchronization

> **Explanation:** GitOps benefits: Git as single source of truth, version control for infrastructure, audit trail (who changed what, when), easy rollback (git revert), automated deployments, drift detection.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://opengitops.dev/#principles](https://opengitops.dev/#principles)

---

### Q233: Which Gateway API resource defines the actual gateway that handles traffic?

A. GatewayClass  
B. Gateway  
C. HTTPRoute  
D. Service  

**Correct Answer:** B. Gateway

> **Explanation:** Gateway API resources: GatewayClass (defines class of gateways), Gateway (actual gateway instance that listens for traffic), HTTPRoute/TCPRoute (routing rules).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/api-types/gateway/](https://gateway-api.sigs.k8s.io/api-types/gateway/)

---

### Q234: What is an advantage of Gateway API over Ingress?

A. It only works with HTTP  
B. It supports multiple protocols (HTTP, TCP, UDP, gRPC) and has role-oriented design  
C. It requires less configuration  
D. It uses less memory  

**Correct Answer:** B. It supports multiple protocols (HTTP, TCP, UDP, gRPC) and has role-oriented design

> **Explanation:** Gateway API advantages: multi-protocol (not just HTTP/HTTPS), role-oriented (infrastructure vs. application teams), expressive, portable, extensible.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://gateway-api.sigs.k8s.io/concepts/api-overview/](https://gateway-api.sigs.k8s.io/concepts/api-overview/)

---

### Q235: What is the role of an Ingress controller?

A. To schedule pods  
B. To implement the rules defined in Ingress resources  
C. To manage secrets  
D. To monitor applications  

**Correct Answer:** B. To implement the rules defined in Ingress resources

> **Explanation:** Ingress controllers watch for Ingress resources, configure underlying load balancer (nginx, HAProxy, Traefik), handle HTTP/HTTPS routing, manage TLS termination. Popular: nginx, Traefik, HAProxy, Istio.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)

---

### Q236: Which practice is central to GitOps?

A. Manual deployments  
B. Git repository as the source of truth for desired state  
C. Direct kubectl commands  
D. Binary configuration files  

**Correct Answer:** B. Git repository as the source of truth for desired state

> **Explanation:** GitOps core practices: infrastructure/applications described declaratively in Git, automated agents sync Git state to clusters, changes via pull requests, continuous reconciliation.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

# Cloud Native Architecture
**Exam Weight: 12%** | **Questions in this section: 55**

**External Reference:** [https://opengitops.dev/](https://opengitops.dev/)

---

### Q237: What is OpenTelemetry?

A. A specific monitoring tool  
B. A vendor-neutral observability framework for collecting metrics, logs, and traces  
C. A cloud provider's monitoring service  
D. A Kubernetes-only logging solution  

**Correct Answer:** B. A vendor-neutral observability framework for collecting metrics, logs, and traces

> **Explanation:** OpenTelemetry (OTel) is a CNCF project that provides APIs, SDKs, and tools for generating and collecting telemetry data (metrics, logs, traces) in a vendor-neutral way.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/what-is-opentelemetry/](https://opentelemetry.io/docs/what-is-opentelemetry/)

---

### Q238: What are the three pillars of observability?

A. Availability, performance, security  
B. Logs, metrics, and traces  
C. CPU, memory, and network  
D. Alerting, dashboards, and on-call  

**Correct Answer:** B. Logs, metrics, and traces

> **Explanation:** The three pillars of observability: Logs (timestamped records of events), Metrics (numerical measurements over time), and Traces (end-to-end request flows across services).

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/observability-primer/](https://opentelemetry.io/docs/concepts/observability-primer/)

---

### Q239: What is PromQL?

A. A container query language  
B. Prometheus Query Language for querying time-series metrics  
C. A SQL dialect for Kubernetes  
D. A policy query language  

**Correct Answer:** B. Prometheus Query Language for querying time-series metrics

> **Explanation:** PromQL is the query language for Prometheus. It allows you to aggregate, filter, and compute on time-series data. Example: rate(http_requests_total[5m]) calculates request rate over 5 minutes.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://prometheus.io/docs/prometheus/latest/querying/basics/](https://prometheus.io/docs/prometheus/latest/querying/basics/)

---

### Q240: What is Grafana used for?

A. Collecting metrics from applications  
B. Visualizing metrics, logs, and traces via dashboards  
C. Distributing container images  
D. Managing Kubernetes deployments  

**Correct Answer:** B. Visualizing metrics, logs, and traces via dashboards

> **Explanation:** Grafana is a popular open-source observability platform for creating dashboards and visualizations. It integrates with Prometheus, Loki, Tempo, and many other data sources.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://grafana.com/docs/grafana/latest/fundamentals/intro-to-grafana/](https://grafana.com/docs/grafana/latest/fundamentals/intro-to-grafana/)

---

### Q241: What is Fluentd used for?

A. Container scheduling  
B. Log collection and forwarding  
C. Metrics scraping  
D. Network policy enforcement  

**Correct Answer:** B. Log collection and forwarding

> **Explanation:** Fluentd is a CNCF graduated project for unified log collection and routing. It collects logs from containers, parses them, and forwards to destinations (Elasticsearch, S3, Kafka, etc.).

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.fluentd.org/architecture](https://www.fluentd.org/architecture)

---

### Q242: What does CNCF Landscape represent?

A. A cloud provider comparison chart  
B. A comprehensive map of cloud-native technologies and projects  
C. A Kubernetes cluster topology diagram  
D. A network architecture diagram  

**Correct Answer:** B. A comprehensive map of cloud-native technologies and projects

> **Explanation:** The CNCF Landscape (landscape.cncf.io) maps hundreds of cloud-native projects and products across categories like orchestration, service mesh, CI/CD, storage, observability, and more.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://landscape.cncf.io/guide](https://landscape.cncf.io/guide)

---

### Q243: What is a service mesh?

A. A Kubernetes networking plugin  
B. An infrastructure layer for managing service-to-service communication  
C. A DNS solution for microservices  
D. A container image registry  

**Correct Answer:** B. An infrastructure layer for managing service-to-service communication

> **Explanation:** A service mesh (e.g., Istio, Linkerd) handles service discovery, load balancing, encryption (mTLS), observability, and traffic management between microservices, typically using a sidecar proxy pattern.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://istio.io/latest/docs/concepts/what-is-istio/#what-is-a-service-mesh](https://istio.io/latest/docs/concepts/what-is-istio/#what-is-a-service-mesh)

---

### Q244: What is Istio?

A. A container runtime  
B. A service mesh providing traffic management, security, and observability  
C. A Kubernetes distribution  
D. A CI/CD tool  

**Correct Answer:** B. A service mesh providing traffic management, security, and observability

> **Explanation:** Istio is a popular open-source service mesh. It uses Envoy proxies as sidecars and provides: mutual TLS (mTLS), traffic splitting, circuit breaking, distributed tracing, and metrics.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://istio.io/latest/docs/concepts/what-is-istio/](https://istio.io/latest/docs/concepts/what-is-istio/)

---

### Q245: What is the 12-factor app methodology relevant to cloud-native?

A. A list of 12 Kubernetes objects  
B. A set of best practices for building scalable, maintainable cloud-native applications  
C. A 12-step deployment process  
D. 12 security requirements for containers  

**Correct Answer:** B. A set of best practices for building scalable, maintainable cloud-native applications

> **Explanation:** The 12-factor app methodology defines best practices including: codebase in version control, explicit dependencies, config in environment variables, stateless processes, and disposability.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://12factor.net/](https://12factor.net/)

---

### Q246: What is immutable infrastructure?

A. Infrastructure that cannot be deleted  
B. Infrastructure that is replaced rather than modified when updates are needed  
C. Read-only container file systems  
D. Infrastructure with fixed resource allocations  

**Correct Answer:** B. Infrastructure that is replaced rather than modified when updates are needed

> **Explanation:** Immutable infrastructure means never modifying running servers/containers. Instead, build a new image and replace the old one. This ensures consistency, easier rollbacks, and eliminates configuration drift.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure](https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure)

**Review Note:** Immutable infrastructure is an architecture pattern, so the reference is a concept article rather than Kubernetes product docs.

---

### Q247: What is the purpose of a container image layer?

A. To separate containers on the same node  
B. To enable efficient image sharing and caching through incremental file system layers  
C. To provide network isolation  
D. To limit container resource usage  

**Correct Answer:** B. To enable efficient image sharing and caching through incremental file system layers

> **Explanation:** Container images are built in layers (UnionFS). Each Dockerfile instruction creates a layer. Layers are cached and shared between images, reducing storage and pull time.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/](https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/)

---

### Q248: What is Envoy proxy?

A. A container runtime  
B. A high-performance edge and service proxy used in service meshes  
C. A Kubernetes ingress controller only  
D. A DNS server  

**Correct Answer:** B. A high-performance edge and service proxy used in service meshes

> **Explanation:** Envoy is a CNCF graduated project and the default sidecar proxy in Istio. It handles load balancing, circuit breaking, health checks, distributed tracing, and TLS termination.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy](https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy)

---

### Q249: What is the purpose of etcd in a Kubernetes cluster?

A. To run the Kubernetes API  
B. To store all cluster state and configuration data persistently  
C. To manage container networking  
D. To schedule pods  

**Correct Answer:** B. To store all cluster state and configuration data persistently

> **Explanation:** etcd is a distributed, reliable key-value store used as Kubernetes' primary data store. All cluster objects (pods, services, secrets, configmaps) are stored in etcd. It uses the Raft consensus algorithm.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/)

---

### Q250: Which CNCF project provides serverless function execution on Kubernetes?

A. Prometheus  
B. Knative  
C. Argo  
D. Flux  

**Correct Answer:** B. Knative

> **Explanation:** Knative is a CNCF incubating project providing serverless and event-driven capabilities on Kubernetes. Knative Serving handles auto-scaling to zero and HTTP traffic management; Knative Eventing handles event-driven architectures.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac)

---

### Q251: What is the CNCF project maturity model?

A. Alpha, Beta, Stable  
B. Sandbox, Incubating, Graduated  
C. Early Access, Preview, GA  
D. Experimental, Production-Ready, Deprecated  

**Correct Answer:** B. Sandbox, Incubating, Graduated

> **Explanation:** CNCF project maturity levels: Sandbox (early-stage, experimental), Incubating (used in production by some adopters), Graduated (widely adopted, demonstrated stability). Kubernetes, Prometheus, and Envoy are graduated projects.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://prometheus.io/docs/alerting/latest/alertmanager/](https://prometheus.io/docs/alerting/latest/alertmanager/)

---

### Q252: What is cloud-native observability?

A. Watching cloud costs  
B. The ability to understand internal system state through external outputs (logs, metrics, traces)  
C. Monitoring cloud provider uptime  
D. Viewing Kubernetes dashboard only  

**Correct Answer:** B. The ability to understand internal system state through external outputs (logs, metrics, traces)

> **Explanation:** Observability is broader than monitoring: it's the ability to ask new questions about a system without deploying new code, using the telemetry data (logs, metrics, traces) the system emits.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://sre.google/sre-book/service-level-objectives/](https://sre.google/sre-book/service-level-objectives/)

---

### Q253: What is mTLS (mutual TLS) in a service mesh context?

A. A multi-tenant TLS solution  
B. Both client and server authenticate each other with certificates  
C. TLS used only for external traffic  
D. A deprecated security protocol  

**Correct Answer:** B. Both client and server authenticate each other with certificates

> **Explanation:** mTLS requires both parties in a connection to present certificates. In service meshes, this enables zero-trust networking where every service-to-service call is authenticated and encrypted.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://sre.google/sre-book/service-level-objectives/](https://sre.google/sre-book/service-level-objectives/)

---

### Q254: What is cloud-native?

A. Applications deployed only on public clouds  
B. Applications designed to leverage cloud characteristics: scalability, resilience, automation  
C. Applications running in containers only  
D. Applications using proprietary cloud services  

**Correct Answer:** B. Applications designed to leverage cloud characteristics: scalability, resilience, automation

> **Explanation:** Cloud-native is an approach to building and running scalable applications that exploits the advantages of the cloud computing model: loose coupling, microservices, containers, declarative APIs, immutable infrastructure.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://martinfowler.com/bliki/CircuitBreaker.html](https://martinfowler.com/bliki/CircuitBreaker.html)

**Review Note:** Circuit breaker is a resilience pattern; Martin Fowler remains the canonical conceptual reference.

---

### Q255: What is microservices architecture?

A. Architecture using very small servers  
B. An architectural style decomposing applications into small, independent, deployable services  
C. A networking protocol for small packets  
D. A container size limit  

**Correct Answer:** B. An architectural style decomposing applications into small, independent, deployable services

> **Explanation:** Microservices break applications into independently deployable services each responsible for a specific business capability. Benefits: independent scaling, technology diversity, faster deployment cycles.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://litmuschaos.io/](https://litmuschaos.io/)

**Review Note:** LitmusChaos project reference used for tool-specific accuracy.

---

### Q256: What is the difference between monolithic and microservices architecture?

A. Monolithic runs in containers; microservices does not  
B. Monolithic is a single deployable unit; microservices decomposes into independent services  
C. Monolithic is faster; microservices is always slower  
D. There is no meaningful difference  

**Correct Answer:** B. Monolithic is a single deployable unit; microservices decomposes into independent services

> **Explanation:** Monolithic apps are built as a single unit; changes require redeploying the whole app. Microservices enable independent deployment, scaling, and technology choices per service.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-security/blob/main/community/roles.md](https://github.com/cncf/tag-security/blob/main/community/roles.md)

**Review Note:** TAG Security references point to the CNCF TAG Security repository because that is the primary home for the group and its work products.

---

### Q257: What is serverless computing?

A. Computing without any servers  
B. A cloud execution model where the provider manages infrastructure and scales automatically per request  
C. Containers without a host OS  
D. A virtual machine type  

**Correct Answer:** B. A cloud execution model where the provider manages infrastructure and scales automatically per request

> **Explanation:** Serverless (FaaS — Function as a Service) abstracts servers entirely. Developers deploy functions; the provider handles provisioning, scaling (including to zero), and billing per execution.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-security/blob/main/community/roles.md](https://github.com/cncf/tag-security/blob/main/community/roles.md)

---

### Q258: What is Infrastructure as Code (IaC)?

A. Writing application code on servers  
B. Managing and provisioning infrastructure through code and automation tools  
C. A programming language for cloud providers  
D. A type of containerization  

**Correct Answer:** B. Managing and provisioning infrastructure through code and automation tools

> **Explanation:** IaC (Terraform, Pulumi, CloudFormation) defines infrastructure declaratively in code. Benefits: version control, repeatability, drift detection, automated provisioning.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-security/blob/main/security-whitepaper/v2/cloud-native-security-whitepaper.md](https://github.com/cncf/tag-security/blob/main/security-whitepaper/v2/cloud-native-security-whitepaper.md)

---

### Q259: What is the role of Prometheus Alertmanager?

A. Collecting metrics  
B. Handling alerts from Prometheus including deduplication, grouping, silencing, and routing  
C. Visualizing dashboards  
D. Storing log data  

**Correct Answer:** B. Handling alerts from Prometheus including deduplication, grouping, silencing, and routing

> **Explanation:** Alertmanager receives firing alerts from Prometheus, deduplicates and groups them, applies silences and inhibitions, and routes notifications to receivers (PagerDuty, Slack, email, etc.).

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-security/blob/main/security-whitepaper/v2/cloud-native-security-whitepaper.md](https://github.com/cncf/tag-security/blob/main/security-whitepaper/v2/cloud-native-security-whitepaper.md)

**Review Note:** The 4Cs and related cloud-native security framing come from the CNCF Security Whitepaper family, which is the right canonical source.

---

### Q260: What is SLO (Service Level Objective)?

A. A legal agreement between provider and customer  
B. An internal target for service reliability (e.g., 99.9% availability)  
C. A measurement of individual request latency  
D. A network latency objective  

**Correct Answer:** B. An internal target for service reliability (e.g., 99.9% availability)

> **Explanation:** SLO is an internal goal for service performance. SLI (Service Level Indicator) measures actual performance. SLA (Service Level Agreement) is the contractual promise. SLO is typically stricter than SLA.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-security/blob/main/security-whitepaper/v2/cloud-native-security-whitepaper.md](https://github.com/cncf/tag-security/blob/main/security-whitepaper/v2/cloud-native-security-whitepaper.md)

---

### Q261: What is an SLI (Service Level Indicator)?

A. A legal indicator in service contracts  
B. A quantitative metric measuring service behavior (e.g., request latency, error rate)  
C. An infrastructure reliability index  
D. A log aggregation tool  

**Correct Answer:** B. A quantitative metric measuring service behavior (e.g., request latency, error rate)

> **Explanation:** SLIs are metrics that measure service performance. Common SLIs: availability (% successful requests), latency (% requests under threshold), error rate, throughput.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.cncf.io/blog/2022/03/08/what-is-serverless/](https://www.cncf.io/blog/2022/03/08/what-is-serverless/)

**Review Note:** Serverless wording was normalized to emphasize abstracting infrastructure provisioning/operations rather than implying servers cease to exist.

---

### Q262: What is a circuit breaker pattern?

A. A Kubernetes network policy  
B. A resilience pattern that stops sending requests to a failing service temporarily  
C. A container restart strategy  
D. A TLS certificate rotation mechanism  

**Correct Answer:** B. A resilience pattern that stops sending requests to a failing service temporarily

> **Explanation:** The circuit breaker pattern (popularized by Hystrix/Resilience4j, implemented in service meshes) monitors failures and opens the circuit to prevent cascade failures, allowing the failing service time to recover.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.redhat.com/en/topics/devops/what-is-sre](https://www.redhat.com/en/topics/devops/what-is-sre)

---

### Q263: What is chaos engineering?

A. Deliberately introducing failures in production to test system resilience  
B. Running disorganized deployments  
C. A debugging methodology  
D. Random auto-scaling  

**Correct Answer:** A. Deliberately introducing failures in production to test system resilience

> **Explanation:** Chaos engineering (popularized by Netflix's Chaos Monkey) deliberately injects failures (kill pods, inject latency, drain nodes) to verify that systems can tolerate real-world failures. Tools: Chaos Mesh, LitmusChaos (both CNCF projects).

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.redhat.com/en/topics/cloud-native-apps/serverless-vs-containers](https://www.redhat.com/en/topics/cloud-native-apps/serverless-vs-containers)

---

### Q264: What is LitmusChaos?

A. A Kubernetes monitoring tool  
B. A CNCF cloud-native chaos engineering platform  
C. A container runtime  
D. A GitOps tool  

**Correct Answer:** B. A CNCF cloud-native chaos engineering platform

> **Explanation:** LitmusChaos is a CNCF incubating project providing a chaos engineering platform for Kubernetes. It includes a library of chaos experiments (pod kill, node drain, network partition) and a workflow engine.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

---

### Q265: What is the CNCF Security TAG (Technical Advisory Group)?

A. A Kubernetes security scanner  
B. A CNCF group that advises on cloud-native security best practices and assessments  
C. A secrets management tool  
D. An admission controller  

**Correct Answer:** B. A CNCF group that advises on cloud-native security best practices and assessments

> **Explanation:** The CNCF Security TAG provides security guidance, project security assessments (audits), whitepapers (Cloud Native Security Whitepaper), and best practices for cloud-native projects and adopters.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q266: What is the CNCF TAG (Technical Advisory Group) for Security's Cloud Native Security Whitepaper?

A. A guide for securing Kubernetes RBAC only  
B. A comprehensive framework covering supply chain, runtime security, and lifecycle security for cloud-native systems  
C. An NSA security standard for containers  
D. A Kubernetes security checklist only  

**Correct Answer:** B. A comprehensive framework covering supply chain, runtime security, and lifecycle security for cloud-native systems

> **Explanation:** The CNCF Cloud Native Security Whitepaper covers the 4Cs (Cloud, Cluster, Container, Code), supply chain security, runtime protection, and the security lifecycle from development to production.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q267: What is eBPF and its relevance to cloud-native?

A. An extended build process for container images  
B. Extended Berkeley Packet Filter — enables high-performance networking, observability, and security in Linux  
C. An encryption protocol for Kubernetes  
D. A container file system standard  

**Correct Answer:** B. Extended Berkeley Packet Filter — enables high-performance networking, observability, and security in Linux

> **Explanation:** eBPF allows running sandboxed programs in the kernel without changing kernel source or loading modules. In cloud-native: Cilium uses eBPF for high-performance networking/security, Falco/Tetragon for runtime security.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md](https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md)

---

### Q268: What is Falco?

A. A container build tool  
B. A CNCF cloud-native runtime security tool that detects unexpected behavior using system calls  
C. A log aggregation platform  
D. A Kubernetes scheduler plugin  

**Correct Answer:** B. A CNCF cloud-native runtime security tool that detects unexpected behavior using system calls

> **Explanation:** Falco (CNCF graduated) monitors Linux system calls and Kubernetes audit logs to detect anomalous behavior (unexpected file access, privilege escalation, network connections) at runtime.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.cncf.io/about/](https://www.cncf.io/about/)

---

### Q269: What is the purpose of a service account token in Kubernetes?

A. To authenticate human users  
B. To allow pods to authenticate to the Kubernetes API server  
C. To encrypt pod-to-pod communication  
D. To store application secrets  

**Correct Answer:** B. To allow pods to authenticate to the Kubernetes API server

> **Explanation:** Service account tokens are JWT credentials that pods use to authenticate API requests. Since Kubernetes 1.21, tokens are projected (bound to pod lifetime) rather than long-lived, improving security.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)

---

### Q270: What is Zero Trust networking in cloud-native?

A. Using no network encryption  
B. A security model that requires authentication and authorization for every access, trusting nothing by default  
C. Kubernetes networking without NetworkPolicies  
D. A firewall-only security approach  

**Correct Answer:** B. A security model that requires authentication and authorization for every access, trusting nothing by default

> **Explanation:** Zero Trust assumes no implicit trust based on network location. Every service-to-service call requires authentication (mTLS in service meshes) and authorization (RBAC, OPA policies), even within the cluster.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

---

### Q271: What is OPA (Open Policy Agent)?

A. A container runtime  
B. A general-purpose policy engine that enforces rules across cloud-native systems  
C. A Kubernetes dashboard  
D. A CI/CD tool  

**Correct Answer:** B. A general-purpose policy engine that enforces rules across cloud-native systems

> **Explanation:** OPA (CNCF graduated) provides a unified policy language (Rego) for enforcing policies across Kubernetes admission control (via Gatekeeper), Terraform, microservices, and CI/CD pipelines.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.jaegertracing.io/docs/latest/architecture/](https://www.jaegertracing.io/docs/latest/architecture/)

**Review Note:** Jaeger was chosen as the canonical distributed tracing tool reference for tool-specific questions.

---

### Q272: What is Kyverno?

A. A service mesh  
B. A Kubernetes-native policy engine that validates, mutates, and generates resources  
C. A monitoring tool  
D. A storage provisioner  

**Correct Answer:** B. A Kubernetes-native policy engine that validates, mutates, and generates resources

> **Explanation:** Kyverno (CNCF graduated) is a policy engine specifically for Kubernetes. Policies are written as Kubernetes resources (no Rego). Supports validation, mutation, generation of resources, and image signature verification.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

---

### Q273: What is a CNCF Sandbox project?

A. A deprecated project  
B. An early-stage project accepted by CNCF that shows promise but has limited production adoption  
C. A project used only in testing environments  
D. A project under security review  

**Correct Answer:** B. An early-stage project accepted by CNCF that shows promise but has limited production adoption

> **Explanation:** CNCF Sandbox is the entry-level maturity. Projects must be cloud-native, foster an open community, and show potential. Sandbox projects are experimental and may not be production-ready.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q274: What does CNCF stand for?

A. Cloud Native Container Foundation  
B. Cloud Native Computing Federation  
C. Cloud Native Computing Foundation  
D. Cloud Native Cloud Federation  

**Correct Answer:** C. Cloud Native Computing Foundation

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)

---

### Q275: What are the 4Cs of Cloud Native Security?

A. Cluster, Cloud, Containers, Compute  
B. Compute, Cloud, Code, Containers  
C. Code, Container, Cluster, Cloud  
D. Code, Containers, Computer, Computing  

**Correct Answer:** C. Code, Container, Cluster, Cloud

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://www.cncf.io/blog/2020/10/06/cloud-native-security-whitepaper-part-1/](https://www.cncf.io/blog/2020/10/06/cloud-native-security-whitepaper-part-1/)

---

### Q276: What does serverless computing not need?

A. Cloud  
B. Servers  
C. The provisioning and operating infrastructure  
D. Code  

**Correct Answer:** C. The provisioning and operating infrastructure

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://www.cncf.io/blog/2022/03/08/what-is-serverless/](https://www.cncf.io/blog/2022/03/08/what-is-serverless/)

---

### Q277: Which of the following is not a fundamental metric used in Site Reliability Engineering?

A. Service Level Objective (SLO)  
B. Service Level Indicator (SLI)  
C. Service Level Definition (SLD)  
D. Service Level Agreement (SLA)  

**Correct Answer:** C. Service Level Definition (SLD)

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://sre.google/sre-book/service-level-objectives/](https://sre.google/sre-book/service-level-objectives/)

**Review Note:** Validated that SLD is not one of the standard SRE service level terms alongside SLI, SLO, and SLA.

---

### Q278: Which of the following Computing model doesn't require provisioning of infrastructure?

A. EC2 Instances  
B. Infrastructure as Service  
C. Serverless  
D. Bare Metal Model  

**Correct Answer:** C. Serverless

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://www.cncf.io/blog/2022/03/08/what-is-serverless/](https://www.cncf.io/blog/2022/03/08/what-is-serverless/)

---

### Q279: Which CNCF project is used for collecting metrics and monitoring Kubernetes clusters?

A. Fluentd  
B. Prometheus  
C. Envoy  
D. CoreDNS  

**Correct Answer:** B. Prometheus

> **Explanation:** Prometheus is the CNCF standard for metrics collection and monitoring. It collects time-series data and provides PromQL for queries.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

---

### Q280: What is the purpose of distributed tracing?

A. To track requests as they flow through microservices  
B. To monitor disk usage  
C. To manage network routing  
D. To schedule container workloads  

**Correct Answer:** A. To track requests as they flow through microservices

> **Explanation:** Distributed tracing tracks requests across multiple services, showing request path, latency, errors and bottlenecks. Tools: Jaeger, Zipkin.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q281: What are 'spans' in the context of distributed tracing?

A. Network segments  
B. Individual units of work in a distributed system  
C. Storage volumes  
D. Pod replicas  

**Correct Answer:** B. Individual units of work in a distributed system

> **Explanation:** In distributed tracing: Trace = complete journey of a request; Span = individual operation within a trace (e.g., database query, HTTP call).

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q282: Which of the following is a core principle of cloud-native architecture?

A. Monolithic application design  
B. Manual scaling and deployment  
C. Microservices, containers, and dynamic orchestration  
D. Single point of failure for simplicity  

**Correct Answer:** C. Microservices, containers, and dynamic orchestration

> **Explanation:** Cloud-native principles: microservices architecture, containerization, dynamic orchestration (Kubernetes), automation, CI/CD, resilience and observability, DevOps culture.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md](https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md)

---

### Q283: What is the role of the CNCF (Cloud Native Computing Foundation)?

A. To sell cloud computing services  
B. To provide a vendor-neutral home for open-source cloud-native projects  
C. To compete with Kubernetes  
D. To develop proprietary cloud solutions  

**Correct Answer:** B. To provide a vendor-neutral home for open-source cloud-native projects

> **Explanation:** CNCF hosts and nurtures cloud-native open-source projects like Kubernetes, Prometheus, Envoy. It's vendor-neutral and part of the Linux Foundation.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://www.cncf.io/about/](https://www.cncf.io/about/)

---

### Q284: Which image pull policy instructs Kubernetes to always pull the container image from the registry?

A. IfNotPresent  
B. Never  
C. Always  
D. OnUpdate  

**Correct Answer:** C. Always

> **Explanation:** Image pull policies: Always (pull every time, default for :latest), IfNotPresent (pull only if not cached, default for specific tags), Never (must exist locally).

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)

---

### Q285: You have an application that requires a database with persistent storage and consistent network identity. Which statement is correct?

A. Use a Deployment because it's more flexible  
B. Use a StatefulSet because databases need stable identity and persistent volumes  
C. Use a DaemonSet to ensure the database runs on every node  
D. Use a Job because databases complete their work and exit  

**Correct Answer:** B. Use a StatefulSet because databases need stable identity and persistent volumes

> **Explanation:** Databases require persistent storage, stable network identity, and ordered scaling — all provided by StatefulSets.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

---

### Q286: Which tool is used for distributed tracing in cloud-native applications?

A. Prometheus  
B. Jaeger  
C. Fluentd  
D. CoreDNS  

**Correct Answer:** B. Jaeger

> **Explanation:** Distributed tracing tools: Jaeger (CNCF distributed tracing platform), Zipkin (Twitter's tracing system), OpenTelemetry (vendor-neutral observability framework). Prometheus is for metrics, not traces.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://www.jaegertracing.io/docs/latest/architecture/](https://www.jaegertracing.io/docs/latest/architecture/)

---

### Q287: What does Prometheus primarily collect?

A. Application logs  
B. Metrics (time-series data)  
C. Distributed traces  
D. Container images  

**Correct Answer:** B. Metrics (time-series data)

> **Explanation:** Prometheus collects metrics: time-series data (counters, gauges, histograms), CPU usage, request rate, error rate, response time. Not for logs (use Fluentd, Loki) or traces (use Jaeger, Zipkin).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

---

### Q288: What is a 'trace' in distributed tracing?

A. A single log entry  
B. The complete journey of a request through multiple services  
C. A network packet  
D. A container event  

**Correct Answer:** B. The complete journey of a request through multiple services

> **Explanation:** Tracing terminology: Trace (end-to-end request flow across all services), Span (single operation within the trace), Tag (metadata attached to spans). Example: Web request → API → Database = one trace, three spans.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://opentelemetry.io/docs/concepts/signals/traces/](https://opentelemetry.io/docs/concepts/signals/traces/)

---

### Q289: Which image pull policy pulls the image only if it doesn't exist locally?

A. Always  
B. Never  
C. IfNotPresent  
D. OnDemand  

**Correct Answer:** C. IfNotPresent

> **Explanation:** Image pull policies: IfNotPresent (pull only if not in local cache, default for tagged images), Always (always pull latest, default for :latest tag), Never (only use local images).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)

---

### Q290: What is the CNCF's mission?

A. To sell cloud services  
B. To provide a vendor-neutral home for open-source cloud-native projects  
C. To replace Kubernetes  
D. To compete with major cloud providers  

**Correct Answer:** B. To provide a vendor-neutral home for open-source cloud-native projects

> **Explanation:** CNCF mission: host and nurture cloud-native open-source projects, vendor-neutral governance, foster community and collaboration, provide certification programs (KCNA, CKA, etc.). Part of the Linux Foundation.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://www.cncf.io/about/](https://www.cncf.io/about/)

---

### Q291: Which cloud-native principle emphasizes designing for failure?

A. Monolithic architecture  
B. Manual intervention  
C. Resilience and fault tolerance  
D. Single point of failure  

**Correct Answer:** C. Resilience and fault tolerance

> **Explanation:** Cloud-native resilience principles: design for failure (expect components to fail), circuit breakers, retry and timeout strategies, graceful degradation, health checks and auto-healing.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md](https://github.com/cncf/tag-app-delivery/blob/main/whitepapers/cloud-native-definition.md)

---
