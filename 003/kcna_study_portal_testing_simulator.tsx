import React, { useState, useEffect, useMemo, useRef } from 'react';

// ==========================================
// 80 PRE-EMBEDDED HIGH-FIDELITY KCNA QUESTIONS
// ==========================================
const INITIAL_QUESTION_BANK = [
  {
    id: 1,
    domain: "Kubernetes Fundamentals",
    question: "Which Kubernetes component acts as the front-end API for the cluster?",
    options: ["etcd", "kube-scheduler", "kube-apiserver", "controller-manager"],
    correctIndex: 2,
    explanation: "The kube-apiserver is the central management component that exposes the Kubernetes API. All cluster communication passes through it.",
    source: "KCNA Question Bank Q1"
  },
  {
    id: 2,
    domain: "Kubernetes Fundamentals",
    question: "What is the purpose of the controller-manager in Kubernetes?",
    options: [
      "To schedule pods on nodes",
      "To store cluster state",
      "To run controller loops that regulate cluster state",
      "To proxy network traffic"
    ],
    correctIndex: 2,
    explanation: "The controller-manager runs multiple controllers (Node, Replication, Endpoints, ServiceAccount) that watch the API server and work to make the current state match the desired state.",
    source: "KCNA Question Bank Q2"
  },
  {
    id: 3,
    domain: "Kubernetes Fundamentals",
    question: "What kubectl command opens an interactive shell inside a running pod?",
    options: [
      "kubectl enter <pod>",
      "kubectl exec -it <pod> -- /bin/sh",
      "kubectl shell <pod>",
      "kubectl attach <pod>"
    ],
    correctIndex: 1,
    explanation: "kubectl exec -it <pod> -- /bin/sh opens an interactive terminal. The -i flag keeps stdin open; -t allocates a TTY.",
    source: "KCNA Question Bank Q3"
  },
  {
    id: 4,
    domain: "Kubernetes Fundamentals",
    question: "What is the purpose of a liveness probe in Kubernetes?",
    options: [
      "To determine when a container is ready to accept traffic",
      "To detect and restart unhealthy containers",
      "To check resource consumption",
      "To monitor network connectivity"
    ],
    correctIndex: 1,
    explanation: "Liveness probes determine if a container is alive. If the probe fails, the container is killed and restarted according to the pod's restartPolicy.",
    source: "KCNA Question Bank Q4"
  },
  {
    id: 5,
    domain: "Kubernetes Fundamentals",
    question: "What is the difference between a liveness probe and a readiness probe?",
    options: [
      "Liveness restarts the container; readiness removes it from service endpoints",
      "They are identical",
      "Readiness restarts the container; liveness removes it from endpoints",
      "Liveness is for startup; readiness is for runtime"
    ],
    correctIndex: 0,
    explanation: "Liveness probe failure = container restarts. Readiness probe failure = pod removed from Service endpoints (traffic stops) but container keeps running.",
    source: "KCNA Question Bank Q5"
  },
  {
    id: 6,
    domain: "Kubernetes Fundamentals",
    question: "What is a ConfigMap used for?",
    options: [
      "Storing encrypted passwords",
      "Storing non-sensitive configuration data",
      "Defining RBAC policies",
      "Managing container images"
    ],
    correctIndex: 1,
    explanation: "ConfigMaps store non-sensitive key-value configuration data that can be consumed by pods as environment variables, command-line arguments, or config files in volumes.",
    source: "KCNA Question Bank Q6"
  },
  {
    id: 7,
    domain: "Kubernetes Fundamentals",
    question: "How can a pod consume a ConfigMap?",
    options: [
      "As environment variables only",
      "As a mounted volume only",
      "As environment variables or mounted as files in a volume",
      "Only through the Kubernetes API"
    ],
    correctIndex: 2,
    explanation: "ConfigMaps and Secrets can both be consumed as environment variables (individual keys or all keys) or mounted as files in a volume.",
    source: "KCNA Question Bank Q7"
  },
  {
    id: 8,
    domain: "Kubernetes Fundamentals",
    question: "What is Role-Based Access Control (RBAC) in Kubernetes?",
    options: [
      "Runtime-Based Access Control",
      "Role-Based Access Control for managing permissions",
      "Resource-Based Admission Control",
      "Registry-Based Authentication Control"
    ],
    correctIndex: 1,
    explanation: "RBAC regulates access to cluster resources. Roles define permissions; RoleBindings assign roles to users, groups, or service accounts.",
    source: "KCNA Question Bank Q8"
  },
  {
    id: 9,
    domain: "Kubernetes Fundamentals",
    question: "What is the difference between a Role and a ClusterRole?",
    options: [
      "Role is for nodes; ClusterRole is for pods",
      "Role is namespace-scoped; ClusterRole is cluster-wide",
      "Role uses RBAC; ClusterRole uses ABAC",
      "There is no difference"
    ],
    correctIndex: 1,
    explanation: "Role grants permissions within a specific namespace. ClusterRole grants permissions across the entire cluster or to non-namespaced resources (nodes, PVs).",
    source: "KCNA Question Bank Q9"
  },
  {
    id: 10,
    domain: "Kubernetes Fundamentals",
    question: "What does the kubectl get pods -o wide command show in addition to standard output?",
    options: [
      "Pod logs",
      "Pod IP address and node name",
      "Pod resource usage",
      "Pod environment variables"
    ],
    correctIndex: 1,
    explanation: "The -o wide flag adds additional columns: NODE (which node the pod runs on), IP (pod IP address), NOMINATED NODE, and READINESS GATES.",
    source: "KCNA Question Bank Q10"
  },
  {
    id: 11,
    domain: "Kubernetes Fundamentals",
    question: "What is a Kubernetes Ingress resource?",
    options: [
      "A type of storage volume",
      "A set of rules for routing external HTTP/HTTPS traffic to services",
      "A method for pod-to-pod communication",
      "A container runtime interface"
    ],
    correctIndex: 1,
    explanation: "Ingress resources define rules for routing external HTTP/HTTPS traffic. They require an Ingress controller to implement the rules.",
    source: "KCNA Question Bank Q13"
  },
  {
    id: 12,
    domain: "Kubernetes Fundamentals",
    question: "What is the purpose of resource limits in Kubernetes?",
    options: [
      "To guarantee minimum resources for scheduling",
      "To cap the maximum resources a container can consume",
      "To monitor resource usage",
      "To allocate dedicated CPU cores"
    ],
    correctIndex: 1,
    explanation: "Resource limits set the maximum CPU/memory a container can use. If a container exceeds its memory limit, it's killed (OOMKilled). CPU limits throttle the container.",
    source: "KCNA Question Bank Q15"
  },
  {
    id: 13,
    domain: "Kubernetes Fundamentals",
    question: "What Kubernetes object would you use to run a one-off database migration?",
    options: [
      "Deployment",
      "CronJob",
      "Job",
      "StatefulSet"
    ],
    correctIndex: 2,
    explanation: "Jobs are designed for batch/one-off tasks that run to completion. A database migration runs once and should complete successfully.",
    source: "KCNA Question Bank Q16"
  },
  {
    id: 14,
    domain: "Kubernetes Fundamentals",
    question: "Which of the following is true about a Kubernetes Service of type NodePort?",
    options: [
      "It only works within the cluster",
      "It exposes the service on a static port on every node's IP",
      "It creates an external load balancer",
      "It resolves to an external DNS name"
    ],
    correctIndex: 1,
    explanation: "NodePort services expose a port (30000-32767 by default) on every cluster node's IP. External traffic can reach the service via <NodeIP>:<NodePort>.",
    source: "KCNA Question Bank Q17"
  },
  {
    id: 15,
    domain: "Kubernetes Fundamentals",
    question: "What is the purpose of the kube-dns / CoreDNS component in Kubernetes?",
    options: [
      "To manage network policies",
      "To provide DNS-based service discovery within the cluster",
      "To route external traffic",
      "To monitor pod health"
    ],
    correctIndex: 1,
    explanation: "CoreDNS provides DNS resolution within the cluster. Services get DNS names like <service>.<namespace>.svc.cluster.local, enabling pods to discover each other by name.",
    source: "KCNA Question Bank Q18"
  },
  {
    id: 16,
    domain: "Kubernetes Fundamentals",
    question: "What does a ClusterIP service do?",
    options: [
      "Exposes a service externally",
      "Provides a stable virtual IP accessible only within the cluster",
      "Creates an external load balancer",
      "Maps to an external DNS name"
    ],
    correctIndex: 1,
    explanation: "ClusterIP is the default service type. It assigns a virtual IP that is only reachable from within the cluster, providing stable in-cluster connectivity even as pod IPs change.",
    source: "KCNA Question Bank Q19"
  },
  {
    id: 17,
    domain: "Kubernetes Fundamentals",
    question: "What is a multi-container pod?",
    options: [
      "A pod that can run on multiple nodes",
      "A pod containing two or more containers sharing network and storage",
      "A pod with multiple IP addresses",
      "A pod managing multiple namespaces"
    ],
    correctIndex: 1,
    explanation: "Multi-container pods share the same network namespace (same IP, ports), storage volumes, and lifecycle. Common patterns include sidecar, adapter, and ambassador.",
    source: "KCNA Question Bank Q26"
  },
  {
    id: 18,
    domain: "Kubernetes Fundamentals",
    question: "The Kubernetes object 'Stateful Set' requires which service for the network identity of Pods?",
    options: [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "Headless Service"
    ],
    correctIndex: 3,
    explanation: "StatefulSets require a Headless Service (a service with clusterIP: None) to handle the network identity of individual Pods. This populates DNS with direct IP addresses of pods rather than a single proxy IP.",
    source: "KCNA Question Bank Q50"
  },
  {
    id: 19,
    domain: "Kubernetes Fundamentals",
    question: "What is the name of the agent that runs on each Kubernetes worker node?",
    options: [
      "etcd",
      "kube-API server",
      "kube-proxy",
      "kubelet"
    ],
    correctIndex: 3,
    explanation: "The kubelet is the essential node agent running on all workers. It watches the API server for PodSpecs assigned to its node and ensures specified containers run smoothly.",
    source: "KCNA Question Bank Q53"
  },
  {
    id: 20,
    domain: "Kubernetes Fundamentals",
    question: "Which control plane component is responsible for scheduling pods?",
    options: [
      "kubelet",
      "kube controller manager",
      "kube scheduler",
      "kube-proxy"
    ],
    correctIndex: 2,
    explanation: "The kube-scheduler selects the most optimal node for unscheduled pods based on node capacity, taints, tolerations, affinity, and policy guidelines.",
    source: "KCNA Question Bank Q56"
  },
  {
    id: 21,
    domain: "Container Orchestration",
    question: "You need to temporarily prevent new pods from being scheduled on a node for maintenance. Which command should you use?",
    options: [
      "kubectl taint nodes node1 maintenance=true:NoSchedule",
      "kubectl cordon node1",
      "kubectl drain node1",
      "kubectl delete node node1"
    ],
    correctIndex: 1,
    explanation: "kubectl cordon marks a node as unschedulable, preventing new pods from being scheduled while existing pods continue running.",
    source: "KCNA Question Bank Q62"
  },
  {
    id: 22,
    domain: "Container Orchestration",
    question: "What is the primary purpose of an init container in Kubernetes?",
    options: [
      "To run alongside the main container throughout the pod's lifecycle",
      "To perform setup tasks that must complete before the main container starts",
      "To monitor the health of the main container",
      "To handle network traffic for the main container"
    ],
    correctIndex: 1,
    explanation: "Init containers run to completion before the main application containers start. Used for setup tasks like waiting for services, populating volumes, or running initialization scripts.",
    source: "KCNA Question Bank Q63"
  },
  {
    id: 23,
    domain: "Container Orchestration",
    question: "Which Pod Security Standard provides the most restrictive security policies?",
    options: [
      "Privileged",
      "Baseline",
      "Restricted",
      "Default"
    ],
    correctIndex: 2,
    explanation: "The three Pod Security Standards: Privileged (unrestricted), Baseline (minimal restrictions), and Restricted (most restrictive, following system hardening guidelines).",
    source: "KCNA Question Bank Q66"
  },
  {
    id: 24,
    domain: "Container Orchestration",
    question: "You have a database application that requires persistent storage and stable network identity. Which workload type should you use?",
    options: [
      "Deployment",
      "StatefulSet",
      "DaemonSet",
      "Job"
    ],
    correctIndex: 1,
    explanation: "Databases require stable network identity, persistent storage, ordered deployment and scaling — all of which are uniquely provided by StatefulSets.",
    source: "KCNA Question Bank Q67"
  },
  {
    id: 25,
    domain: "Container Orchestration",
    question: "What is the purpose of a NetworkPolicy in Kubernetes?",
    options: [
      "To configure DNS resolution",
      "To control network traffic between pods",
      "To manage external load balancers",
      "To define service endpoints"
    ],
    correctIndex: 1,
    explanation: "NetworkPolicies restrict pod-to-pod and pod-to-external network traffic. By default all traffic is allowed; a NetworkPolicy can selectively allow or deny ingress and egress.",
    source: "KCNA Question Bank Q114"
  },
  {
    id: 26,
    domain: "Container Orchestration",
    question: "What happens if no NetworkPolicy selects a pod?",
    options: [
      "All traffic is denied",
      "All traffic is allowed (default open)",
      "Only DNS traffic is allowed",
      "The pod is isolated"
    ],
    correctIndex: 1,
    explanation: "By default, if no NetworkPolicy selects a pod, all ingress and egress traffic is allowed. NetworkPolicies are additive restrictions.",
    source: "KCNA Question Bank Q115"
  },
  {
    id: 27,
    domain: "Container Orchestration",
    question: "What is the Vertical Pod Autoscaler (VPA)?",
    options: [
      "Scales the number of pod replicas",
      "Automatically adjusts CPU/memory requests and limits for containers",
      "Manages cluster node scaling",
      "Controls storage autoscaling"
    ],
    correctIndex: 1,
    explanation: "VPA. VPA analyzes resource usage and automatically adjusts CPU/memory requests/limits. Unlike HPA (which scales replicas), VPA scales resource allocations per container.",
    source: "KCNA Question Bank Q116"
  },
  {
    id: 28,
    domain: "Container Orchestration",
    question: "What does the Cluster Autoscaler do?",
    options: [
      "Scales pod replicas",
      "Adjusts the number of nodes in the cluster based on pending pods",
      "Resizes container memory limits",
      "Manages storage provisioning"
    ],
    correctIndex: 1,
    explanation: "The Cluster Autoscaler adds nodes when pods can't be scheduled due to resource constraints and removes underutilized nodes. Works with cloud provider node groups.",
    source: "KCNA Question Bank Q117"
  },
  {
    id: 29,
    domain: "Container Orchestration",
    question: "What is a PersistentVolume (PV) access mode ReadWriteOnce?",
    options: [
      "The volume can be mounted read-write by many nodes",
      "The volume can be mounted read-only by many nodes",
      "The volume can be mounted as read-write by a single node",
      "The volume cannot be mounted remotely"
    ],
    correctIndex: 2,
    explanation: "PV access modes: ReadWriteOnce (RWO) — single node read-write; ReadOnlyMany (ROX) — many nodes read-only; ReadWriteMany (RWX) — many nodes read-write.",
    source: "KCNA Question Bank Q118"
  },
  {
    id: 30,
    domain: "Container Orchestration",
    question: "What is a StorageClass in Kubernetes?",
    options: [
      "A classification of pod security levels",
      "A way to define different types of storage with different properties",
      "A namespace for storage resources",
      "A container for storing secrets"
    ],
    correctIndex: 1,
    explanation: "StorageClasses allow administrators to define different storage tiers (SSD, HDD, NFS). PVCs can request a specific StorageClass; dynamic provisioning creates PVs automatically.",
    source: "KCNA Question Bank Q119"
  },
  {
    id: 31,
    domain: "Container Orchestration",
    question: "What is the Container Runtime Interface (CRI)?",
    options: [
      "A GUI for managing containers",
      "A plugin interface that allows Kubernetes to use different container runtimes",
      "A command-line tool for build tools",
      "A network protocol for container communication"
    ],
    correctIndex: 1,
    explanation: "CRI is a plugin interface introduced in Kubernetes 1.5 that standardizes how the kubelet communicates with container runtimes. This enables containerd, CRI-O, and others to work with Kubernetes.",
    source: "KCNA Question Bank Q123"
  },
  {
    id: 32,
    domain: "Container Orchestration",
    question: "What is the Container Storage Interface (CSI)?",
    options: [
      "A container security inspection tool",
      "A standard interface for attaching storage to containers",
      "A container image specification",
      "A storage encryption protocol"
    ],
    correctIndex: 1,
    explanation: "CSI standardizes how storage vendors integrate with Kubernetes (and other orchestrators). It replaced in-tree volume plugins, allowing storage drivers to be developed out-of-tree.",
    source: "KCNA Question Bank Q124"
  },
  {
    id: 33,
    domain: "Container Orchestration",
    question: "Which Kubernetes object runs a pod on every node (or selected nodes)?",
    options: [
      "ReplicaSet",
      "Deployment",
      "DaemonSet",
      "StatefulSet"
    ],
    correctIndex: 2,
    explanation: "DaemonSets ensure a pod copy runs on every node (or a selected subset). Common use cases include logging daemons, node exporters, and networking proxies.",
    source: "KCNA Question Bank Q125"
  },
  {
    id: 34,
    domain: "Container Orchestration",
    question: "What is a headless service in Kubernetes?",
    options: [
      "A service with no selector",
      "A service with ClusterIP set to None, providing direct pod DNS records",
      "A service that does not allow external traffic",
      "A service with no endpoints"
    ],
    correctIndex: 1,
    explanation: "Setting clusterIP: None creates a headless service. DNS returns individual pod IPs instead of a single virtual IP. Required by StatefulSets for stable network identity.",
    source: "KCNA Question Bank Q126"
  },
  {
    id: 35,
    domain: "Container Orchestration",
    question: "What is a CRD (Custom Resource Definition)?",
    options: [
      "A custom Docker image format",
      "An extension that adds custom resource types to the Kubernetes API",
      "A custom networking driver",
      "A custom resource quota"
    ],
    correctIndex: 1,
    explanation: "CRDs extend the Kubernetes API with new resource types. Operators use CRDs to define domain-specific resources (e.g., PostgresCluster, KafkaTopic) managed by custom controllers.",
    source: "KCNA Question Bank Q137"
  },
  {
    id: 36,
    domain: "Container Orchestration",
    question: "What is a Kubernetes Operator?",
    options: [
      "A human who operates the cluster",
      "A software extension that uses CRDs and controllers to manage complex applications",
      "A command-line tool for cluster management",
      "A monitoring component"
    ],
    correctIndex: 1,
    explanation: "Operators encode operational knowledge. They watch CRD instances and automate complex tasks like provisioning, scaling, backup, and failover for stateful applications.",
    source: "KCNA Question Bank Q138"
  },
  {
    id: 37,
    domain: "Container Orchestration",
    question: "The Open Container Initiative (OCI) provides container standards for which specifications?",
    options: [
      "Runtime, Image, Distribution",
      "Image, Build, Distributions",
      "Container, Image, Build",
      "Container, image distribution"
    ],
    correctIndex: 0,
    explanation: "The OCI defines open standards for container formats (image-spec), runtime (runtime-spec), and distribution (distribution-spec). This ensures containers built with one tool run on any OCI-compliant runtime.",
    source: "KCNA Question Bank Q160"
  },
  {
    id: 38,
    domain: "Container Orchestration",
    question: "What are the main parts of a Service Mesh?",
    options: [
      "Master plane and worker node",
      "Kube-scheduler and controller manager",
      "Data plane and Control plane",
      "Discovery plane and data plane"
    ],
    correctIndex: 2,
    explanation: "A service mesh architecture decomposes into two core components: a Control Plane (manages configurations and policies) and a Data Plane (composed of intelligent sidecar proxies routing actual microservice traffic).",
    source: "KCNA Question Bank Q161"
  },
  {
    id: 39,
    domain: "Cloud Native Application Delivery",
    question: "What is continuous integration (CI) in the context of cloud-native?",
    options: [
      "Automatically deploying to production",
      "Automatically building and testing code changes",
      "Continuously monitoring running applications",
      "Integrating cloud providers"
    ],
    correctIndex: 1,
    explanation: "CI automatically builds, tests, and validates code every time a developer pushes changes. It catches bugs early and ensures code quality before deployment.",
    source: "KCNA Question Bank Q192"
  },
  {
    id: 40,
    domain: "Cloud Native Application Delivery",
    question: "What is continuous delivery (CD)?",
    options: [
      "Automatically pushing every commit directly to production",
      "Automatically preparing code so it is always in a deployable state",
      "Delivering container images to a registry",
      "Continuously monitoring application delivery"
    ],
    correctIndex: 1,
    explanation: "CD extends CI by automating the release process so every passing build is deployable to production. Continuous deployment goes further by automatically deploying every passing build.",
    source: "KCNA Question Bank Q193"
  },
  {
    id: 41,
    domain: "Cloud Native Application Delivery",
    question: "What is Flux in the context of GitOps?",
    options: [
      "A container build tool",
      "A CNCF GitOps operator that syncs Kubernetes clusters to Git repositories",
      "A monitoring solution",
      "A secrets management tool"
    ],
    correctIndex: 1,
    explanation: "Flux is a CNCF project (graduated) for implementing GitOps on Kubernetes. It watches Git repositories and automatically applies changes to the cluster, supporting Helm, Kustomize, and plain YAML.",
    source: "KCNA Question Bank Q196"
  },
  {
    id: 42,
    domain: "Cloud Native Application Delivery",
    question: "What is Kustomize used for?",
    options: [
      "Customizing container images",
      "Customizing Kubernetes manifests without templating using overlays",
      "Managing Helm charts",
      "Encrypting Kubernetes secrets"
    ],
    correctIndex: 1,
    explanation: "Kustomize is built into kubectl (kubectl apply -k). It allows you to customize base YAML with overlays and patches without templating engines like Helm's Go templates.",
    source: "KCNA Question Bank Q197"
  },
  {
    id: 43,
    domain: "Cloud Native Application Delivery",
    question: "What is a multi-stage Docker build?",
    options: [
      "A build that runs on multiple nodes",
      "A build using multiple FROM instructions to produce smaller final images",
      "A build that creates multiple images simultaneously",
      "A build with multiple Dockerfiles"
    ],
    correctIndex: 1,
    explanation: "Multi-stage builds use multiple FROM statements. Intermediate stages compile code or install tools; the final stage copies only the artifacts needed to run the app, drastically reducing image size.",
    source: "KCNA Question Bank Q206"
  },
  {
    id: 44,
    domain: "Cloud Native Application Delivery",
    question: "What is a Software Bill of Materials (SBOM)?",
    options: [
      "A Kubernetes resource listing pod components",
      "An inventory of all software components and dependencies in a container image",
      "A budget document for software licenses",
      "A Dockerfile alternative"
    ],
    correctIndex: 1,
    explanation: "An SBOM lists all packages, libraries, and dependencies in a software artifact. It enables security teams to quickly identify vulnerable components when new CVEs are published.",
    source: "KCNA Question Bank Q211"
  },
  {
    id: 45,
    domain: "Cloud Native Application Delivery",
    question: "What is the main advantage of GitOps?",
    options: [
      "Faster container startup times",
      "Using Git as the single source of truth for infrastructure and applications",
      "Reduced storage costs",
      "Improved network performance"
    ],
    correctIndex: 1,
    explanation: "GitOps core principles: Git is the source of truth, declarative configuration, automated synchronization, version control for infrastructure, and a complete audit trail via Git history.",
    source: "KCNA Question Bank Q224"
  },
  {
    id: 46,
    domain: "Cloud Native Application Delivery",
    question: "What advantage does Gateway API have over traditional Ingress?",
    options: [
      "Faster performance",
      "Lower resource usage",
      "Role-oriented design, multi-protocol support, and better extensibility",
      "Simpler configuration"
    ],
    correctIndex: 2,
    explanation: "Gateway API advantages over Ingress: role-oriented design (infrastructure vs. application namespaces), multi-protocol capabilities (HTTP, TCP, UDP, gRPC), extensibility, and better traffic engineering controls.",
    source: "KCNA Question Bank Q226"
  },
  {
    id: 47,
    domain: "Cloud Native Architecture",
    question: "What is OpenTelemetry?",
    options: [
      "A specific monitoring tool",
      "A vendor-neutral observability framework for collecting metrics, logs, and traces",
      "A cloud provider's monitoring service",
      "A Kubernetes-only logging solution"
    ],
    correctIndex: 1,
    explanation: "OpenTelemetry (OTel) is a CNCF project that provides APIs, SDKs, and tools for generating and collecting telemetry data (metrics, logs, traces) in a vendor-neutral way.",
    source: "KCNA Question Bank Q237"
  },
  {
    id: 48,
    domain: "Cloud Native Architecture",
    question: "What are the three pillars of observability?",
    options: [
      "Availability, performance, security",
      "Logs, metrics, and traces",
      "CPU, memory, and network",
      "Alerting, dashboards, and on-call"
    ],
    correctIndex: 1,
    explanation: "The three pillars of observability: Logs (timestamped records of events), Metrics (numerical measurements over time), and Traces (end-to-end request flows across distributed services).",
    source: "KCNA Question Bank Q238"
  },
  {
    id: 49,
    domain: "Cloud Native Architecture",
    question: "What is a service mesh?",
    options: [
      "A Kubernetes networking plugin",
      "An infrastructure layer for managing service-to-service communication",
      "A DNS solution for microservices",
      "A container image registry"
    ],
    correctIndex: 1,
    explanation: "A service mesh handles service discovery, load balancing, encryption (mTLS), observability, and traffic management between microservices, typically using a sidecar proxy pattern.",
    source: "KCNA Question Bank Q243"
  },
  {
    id: 50,
    domain: "Cloud Native Architecture",
    question: "What is the 12-factor app methodology relevant to cloud-native?",
    options: [
      "A list of 12 Kubernetes objects",
      "A set of best practices for building scalable, maintainable cloud-native applications",
      "A 12-step deployment process",
      "12 security requirements for containers"
    ],
    correctIndex: 1,
    explanation: "The 12-factor app methodology defines best practices including: codebase in version control, explicit dependencies, config in environment variables, stateless processes, and disposability.",
    source: "KCNA Question Bank Q245"
  },
  {
    id: 51,
    domain: "Cloud Native Architecture",
    question: "What is immutable infrastructure?",
    options: [
      "Infrastructure that cannot be deleted",
      "Infrastructure that is replaced rather than modified when updates are needed",
      "Read-only container file systems",
      "Infrastructure with fixed resource allocations"
    ],
    correctIndex: 1,
    explanation: "Immutable infrastructure means never modifying running servers/containers. Instead, build a new image and replace the old one. This ensures consistency, easier rollbacks, and eliminates configuration drift.",
    source: "KCNA Question Bank Q246"
  },
  {
    id: 52,
    domain: "Cloud Native Architecture",
    question: "What does Prometheus primarily collect?",
    options: [
      "Application logs",
      "Metrics (time-series data)",
      "Distributed traces",
      "Container images"
    ],
    correctIndex: 1,
    explanation: "Prometheus is designed to pull and collect metrics as time-series data. It is not optimized for logs (which are managed by Fluentd/Loki) or distributed traces (managed by Jaeger).",
    source: "KCNA Question Bank Q287"
  },
  {
    id: 53,
    domain: "Cloud Native Architecture",
    question: "What is a 'trace' in distributed tracing?",
    options: [
      "A single log entry",
      "The complete journey of a request through multiple services",
      "A network packet",
      "A container event"
    ],
    correctIndex: 1,
    explanation: "A trace represents the end-to-end flow of a request across a distributed microservices system, showing latency bottlenecks and spans of nested service interactions.",
    source: "KCNA Question Bank Q288"
  },
  {
    id: 54,
    domain: "Cloud Native Architecture",
    question: "Which cloud-native principle emphasizes designing for failure?",
    options: [
      "Monolithic architecture",
      "Manual intervention",
      "Resilience and fault tolerance",
      "Single point of failure"
    ],
    correctIndex: 2,
    explanation: "Resilience and fault tolerance are foundational in cloud-native systems, ensuring that single component failures do not cascade into catastrophic system-wide outages.",
    source: "KCNA Question Bank Q291"
  },
  {
    id: 55,
    domain: "Kubernetes Fundamentals",
    question: "What does the --dry-run=client flag do with kubectl?",
    options: [
      "Runs the command against a test cluster",
      "Simulates the command without creating resources",
      "Executes in verbose mode",
      "Connects to a client cluster"
    ],
    correctIndex: 1,
    explanation: "--dry-run=client simulates the command locally without sending it to the API server. Combine with -o yaml to generate manifest templates.",
    source: "KCNA Question Bank Q23"
  },
  {
    id: 56,
    domain: "Kubernetes Fundamentals",
    question: "What is a pod template?",
    options: [
      "A pre-built pod configuration from the marketplace",
      "The specification within a controller (Deployment, StatefulSet) that defines how pods are created",
      "A Docker Compose file",
      "A pod that acts as a template for cloning"
    ],
    correctIndex: 1,
    explanation: "The pod template spec (.spec.template) in a Deployment or ReplicaSet defines the desired state for each pod the controller creates.",
    source: "KCNA Question Bank Q24"
  },
  {
    id: 57,
    domain: "Kubernetes Fundamentals",
    question: "How do you force delete a pod stuck in Terminating state?",
    options: [
      "kubectl delete pod <name> --grace-period=0 --force",
      "kubectl remove pod <name>",
      "kubectl kill pod <name>",
      "kubectl terminate pod <name>"
    ],
    correctIndex: 0,
    explanation: "Force deletion bypasses the graceful termination period. Use with caution as it may leave the node-side cleanup incomplete.",
    source: "KCNA Question Bank Q25"
  },
  {
    id: 58,
    domain: "Kubernetes Fundamentals",
    question: "Which Kubernetes resource limits the number of resources consumed in a namespace?",
    options: [
      "LimitRange",
      "ResourceQuota",
      "PodSecurityPolicy",
      "ClusterRole"
    ],
    correctIndex: 1,
    explanation: "ResourceQuota restricts aggregate resource consumption in a namespace (total CPU, memory, number of pods, PVCs, etc.). LimitRange sets default/max per-pod/container limits.",
    source: "KCNA Question Bank Q28"
  },
  {
    id: 59,
    domain: "Kubernetes Fundamentals",
    question: "What is a LimitRange?",
    options: [
      "A cluster-wide resource cap",
      "A policy that sets default and max/min resource requests and limits per pod/container in a namespace",
      "A network bandwidth limit",
      "A storage size limit for PVCs"
    ],
    correctIndex: 1,
    explanation: "LimitRange auto-applies default resource requests/limits to containers that don't specify them and enforces min/max constraints per namespace.",
    source: "KCNA Question Bank Q29"
  },
  {
    id: 60,
    domain: "Kubernetes Fundamentals",
    question: "What is the Kubernetes API group for apps (Deployments, ReplicaSets, StatefulSets)?",
    options: [
      "v1",
      "apps/v1",
      "extensions/v1beta1",
      "batch/v1"
    ],
    correctIndex: 1,
    explanation: "Workload resources like Deployment, ReplicaSet, StatefulSet, and DaemonSet belong to the apps/v1 API group. Pods and Services are in the core v1 group.",
    source: "KCNA Question Bank Q30"
  },
  {
    id: 61,
    domain: "Kubernetes Fundamentals",
    question: "What is a finalizer in Kubernetes?",
    options: [
      "A container that runs last in a pod",
      "A metadata key that prevents object deletion until cleanup logic completes",
      "A termination handler for namespaces",
      "A pod shutdown script"
    ],
    correctIndex: 1,
    explanation: "Finalizers prevent object deletion. When you delete an object with finalizers, Kubernetes marks it for deletion and waits for controllers to perform cleanup (e.g., PV reclaim, external resource cleanup) before removing the object.",
    source: "KCNA Question Bank Q31"
  },
  {
    id: 62,
    domain: "Kubernetes Fundamentals",
    question: "What is kubectl port-forward used for?",
    options: [
      "Configuring firewall rules",
      "Forwarding a local port to a port on a pod for debugging",
      "Exposing a pod as a service",
      "Creating a NodePort service"
    ],
    correctIndex: 1,
    explanation: "kubectl port-forward <pod> <local-port>:<pod-port> creates a tunnel from your local machine to a pod, useful for debugging services without exposing them externally.",
    source: "KCNA Question Bank Q32"
  },
  {
    id: 63,
    domain: "Kubernetes Fundamentals",
    question: "What is a Kubernetes context?",
    options: [
      "A container execution environment",
      "A named configuration specifying a cluster, user, and namespace for kubectl",
      "A pod execution context",
      "A namespace alias"
    ],
    correctIndex: 1,
    explanation: "A kubectl context combines a cluster (API server URL + CA), a user (credentials), and optionally a default namespace. Contexts allow switching between multiple clusters easily.",
    source: "KCNA Question Bank Q36"
  },
  {
    id: 64,
    domain: "Kubernetes Fundamentals",
    question: "What does kubectl config use-context do?",
    options: [
      "Creates a new context",
      "Switches the active kubectl context",
      "Deletes a context",
      "Lists all contexts"
    ],
    correctIndex: 1,
    explanation: "kubectl config use-context <context-name> sets the current context. kubectl config get-contexts lists all available contexts with the active one marked.",
    source: "KCNA Question Bank Q37"
  },
  {
    id: 65,
    domain: "Kubernetes Fundamentals",
    question: "What does kubectl describe node show?",
    options: [
      "The node's container logs",
      "Node capacity, allocatable resources, running pods, and conditions",
      "The node's network interfaces only",
      "The node's BIOS information"
    ],
    correctIndex: 1,
    explanation: "kubectl describe node shows: capacity vs. allocatable resources, node conditions (Ready, MemoryPressure, DiskPressure), running pods and their resource usage, and system info.",
    source: "KCNA Question Bank Q39"
  },
  {
    id: 66,
    domain: "Kubernetes Fundamentals",
    question: "What is the purpose of the kube-system namespace?",
    options: [
      "A namespace for user applications",
      "A namespace for system-level Kubernetes components and infrastructure pods",
      "A namespace that cannot be used",
      "A namespace for testing only"
    ],
    correctIndex: 1,
    explanation: "kube-system hosts core components: CoreDNS, kube-proxy, metrics-server, CNI plugins, and cloud controller managers. It is created automatically during cluster setup.",
    source: "KCNA Question Bank Q41"
  },
  {
    id: 67,
    domain: "Kubernetes Fundamentals",
    question: "What is a static pod in Kubernetes?",
    options: [
      "A pod that never restarts",
      "A pod managed directly by the kubelet from a manifest file on the node, not via the API server",
      "A pod with no volumes",
      "A pod with fixed resource allocations"
    ],
    correctIndex: 1,
    explanation: "Static pods are defined in /etc/kubernetes/manifests/ on a node. The kubelet monitors this directory and creates/restarts pods from these files. Control plane components (etcd, apiserver) are often static pods.",
    source: "KCNA Question Bank Q44"
  },
  {
    id: 68,
    domain: "Kubernetes Fundamentals",
    question: "What is the default service account behavior for pods?",
    options: [
      "Pods have no service account by default",
      "Pods automatically get the default service account token mounted",
      "Pods must explicitly request a service account",
      "Service accounts are disabled by default"
    ],
    correctIndex: 1,
    explanation: "By default, Kubernetes mounts the default service account's token into every pod at /var/run/secrets/kubernetes.io/serviceaccount/. Set automountServiceAccountToken: false to disable this.",
    source: "KCNA Question Bank Q48"
  },
  {
    id: 69,
    domain: "Kubernetes Fundamentals",
    question: "What is a namespace-scoped resource vs. cluster-scoped resource?",
    options: [
      "Namespace-scoped resources are shared; cluster-scoped are isolated",
      "Namespace-scoped resources exist within a namespace; cluster-scoped resources (nodes, PVs, CRDs) exist cluster-wide",
      "Cluster-scoped resources require cluster admin; namespace-scoped do not",
      "There is no practical difference"
    ],
    correctIndex: 1,
    explanation: "Pods, Services, ConfigMaps, Secrets, Deployments are namespace-scoped. Nodes, PersistentVolumes, ClusterRoles, StorageClasses, and CRDs are cluster-scoped.",
    source: "KCNA Question Bank Q49"
  },
  {
    id: 70,
    domain: "Container Orchestration",
    question: "What RBAC resource binds a ClusterRole to a user at the namespace level?",
    options: [
      "RoleBinding",
      "ClusterRoleBinding",
      "ServiceAccountBinding",
      "NamespaceRole"
    ],
    correctIndex: 0,
    explanation: "A RoleBinding can bind either a Role or a ClusterRole to subjects within a specific namespace. A ClusterRoleBinding grants the ClusterRole permissions across the entire cluster.",
    source: "KCNA Question Bank Q128"
  },
  {
    id: 71,
    domain: "Container Orchestration",
    question: "What is the purpose of an admission controller in Kubernetes?",
    options: [
      "To authenticate users",
      "To intercept and process API requests before they are persisted",
      "To schedule pods",
      "To manage network rules"
    ],
    correctIndex: 1,
    explanation: "Admission controllers intercept API requests after authentication and authorization but before object persistence. They can validate (mutating) or reject (validating) requests.",
    source: "KCNA Question Bank Q129"
  },
  {
    id: 72,
    domain: "Container Orchestration",
    question: "What is pod affinity used for?",
    options: [
      "To repel pods from nodes",
      "To co-locate pods on the same node or zone as other pods",
      "To assign pods to specific nodes",
      "To limit pod resource usage"
    ],
    correctIndex: 1,
    explanation: "Pod affinity attracts pods to nodes that already run pods with matching labels. Pod anti-affinity spreads pods away from each other.",
    source: "KCNA Question Bank Q131"
  },
  {
    id: 73,
    domain: "Container Orchestration",
    question: "What is the purpose of a PodDisruptionBudget (PDB)?",
    options: [
      "To set resource budgets for pods",
      "To ensure a minimum number of pods remain available during voluntary disruptions",
      "To limit pod network traffic",
      "To control pod startup time"
    ],
    correctIndex: 1,
    explanation: "PDBs protect applications from voluntary disruptions (node drains, cluster upgrades) by specifying a minimum number or maximum number of pods that can be disrupted.",
    source: "KCNA Question Bank Q132"
  },
  {
    id: 74,
    domain: "Container Orchestration",
    question: "What is the purpose of node affinity?",
    options: [
      "To attach nodes to specific pods",
      "To attract or repel pods from nodes based on node labels",
      "To configure node networking",
      "To set node resource limits"
    ],
    correctIndex: 1,
    explanation: "Node affinity (requiredDuringSchedulingIgnoredDuringExecution or preferredDuringScheduling) provides rich expressions for node selection, more flexible than nodeSelector.",
    source: "KCNA Question Bank Q139"
  },
  {
    id: 75,
    domain: "Container Orchestration",
    question: "What is inter-pod anti-affinity used for?",
    options: [
      "To prevent pods from communicating",
      "To spread pods across different nodes/zones for high availability",
      "To limit pod-to-pod network traffic",
      "To isolate pods in separate namespaces"
    ],
    correctIndex: 1,
    explanation: "Pod anti-affinity prevents pods with matching labels from co-locating on the same node or zone. Used for HA: ensures replicas of a deployment run on different nodes.",
    source: "KCNA Question Bank Q140"
  },
  {
    id: 76,
    domain: "Container Orchestration",
    question: "What is a Kubernetes Endpoint?",
    options: [
      "The API server URL",
      "An object that tracks the pod IPs backing a service",
      "An object that maps external URL routes to a service",
      "A node's physical network interface card (NIC)"
    ],
    correctIndex: 1,
    explanation: "Endpoints (or EndpointSlices) store the IP:port pairs of pods matching a Service's selector. kube-proxy uses them to route traffic to healthy pods.",
    source: "KCNA Question Bank Q141"
  },
  {
    id: 77,
    domain: "Container Orchestration",
    question: "What is an ExternalName service type?",
    options: [
      "A service that provides external load balancing",
      "A service that maps to an external DNS name via CNAME",
      "A service accessible only outside the cluster",
      "A service with a static external IP"
    ],
    correctIndex: 1,
    explanation: "ExternalName services create a DNS alias within the cluster that resolves to an external FQDN. No proxying occurs; it's a pure DNS CNAME.",
    source: "KCNA Question Bank Q143"
  },
  {
    id: 78,
    domain: "Container Orchestration",
    question: "What is the purpose of securityContext in a pod spec?",
    options: [
      "To define network security policies",
      "To set security settings (run as user, capabilities, read-only filesystem) for containers",
      "To configure TLS for the pod",
      "To define RBAC policies for the pod"
    ],
    correctIndex: 1,
    explanation: "securityContext configures security settings at the pod or container level: runAsUser, runAsNonRoot, readOnlyRootFilesystem, and privileges.",
    source: "KCNA Question Bank Q145"
  },
  {
    id: 79,
    domain: "Container Orchestration",
    question: "What is topology spread constraint?",
    options: [
      "A network bandwidth limit",
      "A way to control how pods are spread across cluster topology domains (zones, nodes)",
      "A storage topology definition",
      "A CPU pinning configuration"
    ],
    correctIndex: 1,
    explanation: "topologySpreadConstraints distribute pods evenly across failure domains (nodes, zones, regions). More flexible and expressive than pod anti-affinity for ensuring high availability.",
    source: "KCNA Question Bank Q153"
  },
  {
    id: 80,
    domain: "Container Orchestration",
    question: "What is the purpose of ResourceVersion in Kubernetes objects?",
    options: [
      "The Kubernetes API version",
      "An optimistic concurrency control token that changes when an object is modified",
      "The application version",
      "The Helm chart version"
    ],
    correctIndex: 1,
    explanation: "ResourceVersion is used for optimistic locking. Watch operations use it to receive only changes after a specific version, preventing lost updates.",
    source: "KCNA Question Bank Q150"
  }
];

export default function App() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [activeMode, setActiveMode] = useState('dashboard'); // 'dashboard' | 'study' | 'testing' | 'results' | 'review' | 'import'
  const [questionBank, setQuestionBank] = useState(INITIAL_QUESTION_BANK);
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // User answers & state during testing/study
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionId]: selectedIndex }
  const [flaggedQuestions, setFlaggedQuestions] = useState({}); // { [questionId]: boolean }
  const [studyFeedback, setStudyFeedback] = useState({}); // { [questionId]: { checked: boolean, correct: boolean } }
  
  // Active dynamic randomized questions for Testing Mode (Exactly 50 chosen randomly)
  const [activeTestQuestions, setActiveTestQuestions] = useState([]);
  
  // Exam timer states
  const [examTimer, setExamTimer] = useState(5400); // 90 minutes in seconds
  const [isTimerHidden, setIsTimerHidden] = useState(false);
  const [examTimerActive, setExamTimerActive] = useState(false);
  
  // Custom question bank input
  const [rawMarkdown, setRawMarkdown] = useState('');
  const [importStatus, setImportStatus] = useState(null); // null | { success: boolean, count: number }
  
  // System Tools (Calculator)
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcInput, setCalcInput] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Gemini API Integrations ✨
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [aiStudyPlan, setAiStudyPlan] = useState("");
  const [activeExplainModal, setActiveExplainModal] = useState(null); // { question, options, correctIndex, response }
  
  // AI Practice Sandbox ✨ State
  const [sandboxDomain, setSandboxDomain] = useState("Kubernetes Fundamentals");
  const [generatedQuestion, setGeneratedQuestion] = useState(null); // { question, options, correctIndex, explanation }
  const [sandboxAnswerSelected, setSandboxAnswerSelected] = useState(null);
  const [sandboxVerified, setSandboxVerified] = useState(false);

  // Audio Context Ref
  const audioContextRef = useRef(null);

  // ==========================================
  // PERFORMANCE METRICS CALCULATORS
  // ==========================================
  const domainStatistics = useMemo(() => {
    const domains = [
      "Kubernetes Fundamentals",
      "Container Orchestration",
      "Cloud Native Application Delivery",
      "Cloud Native Architecture"
    ];
    
    return domains.map(domain => {
      const totalInDomain = questionBank.filter(q => q.domain === domain).length;
      const correctlyAnswered = questionBank.filter(q => {
        const answer = selectedAnswers[q.id];
        return answer !== undefined && answer === q.correctIndex;
      }).filter(q => q.domain === domain).length;

      return {
        name: domain,
        total: totalInDomain,
        correct: correctlyAnswered,
        rate: totalInDomain > 0 ? Math.round((correctlyAnswered / totalInDomain) * 100) : 0
      };
    });
  }, [selectedAnswers, questionBank]);

  const overallReadiness = useMemo(() => {
    const totalAnswered = Object.keys(selectedAnswers).length;
    if (totalAnswered === 0) return 0;
    const correctCount = questionBank.filter(q => selectedAnswers[q.id] === q.correctIndex).length;
    return Math.round((correctCount / questionBank.length) * 100);
  }, [selectedAnswers, questionBank]);

  // ==========================================
  // WEB AUDIO SYNTHESIZER FOR FEEDBACK
  // ==========================================
  const playFreqSound = (type) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        osc.start();
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5
        gain.gain.setValueAtTime(0.08, ctx.currentTime + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === 'failure') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.28);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch (e) {
      console.warn("Audio Context blocked or unsupported:", e);
    }
  };

  // ==========================================
  // EXAM TIMER HOOK
  // ==========================================
  useEffect(() => {
    let interval = null;
    if (examTimerActive && examTimer > 0) {
      interval = setInterval(() => {
        setExamTimer((prev) => prev - 1);
      }, 1000);
    } else if (examTimer === 0 && examTimerActive) {
      setExamTimerActive(false);
      handleFinishExam();
    }
    return () => clearInterval(interval);
  }, [examTimerActive, examTimer]);

  // ==========================================
  // QUESTIONS FILTERING & PREPARATION
  // ==========================================
  const filteredQuestions = useMemo(() => {
    if (activeMode === 'testing' || activeMode === 'review') {
      return activeTestQuestions;
    }
    if (selectedDomain === 'All') return questionBank;
    return questionBank.filter(q => q.domain === selectedDomain);
  }, [selectedDomain, questionBank, activeMode, activeTestQuestions]);

  // ==========================================
  // RANDOM SELECTION LOGIC (50 RANDOM QUESTIONS)
  // ==========================================
  const prepareRandomTestingMode = () => {
    // Shuffle pool
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    // Select 50 questions (or less if the bank doesn't have 50)
    const selected = shuffled.slice(0, Math.min(50, shuffled.length));
    
    setActiveTestQuestions(selected);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setStudyFeedback({});
    setCurrentQuestionIndex(0);
    setExamTimer(5400); // 90 minutes
    setExamTimerActive(true);
    setActiveMode('testing');
    playFreqSound('success');
  };

  // ==========================================
  // GEMINI LLM CORE API INTEGRATION ✨
  // ==========================================
  const callGeminiAPI = async (prompt, systemPrompt) => {
    const apiKey = ""; // Handled dynamically in preview runtime
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });
        
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
        throw new Error("No text response received from Gemini.");
      } catch (err) {
        if (i === 4) throw err;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  // 1. AI Concept Deep-Dive Feature ✨
  const handleAiExplainQuestion = async (q) => {
    setAiLoading(true);
    setAiError("");
    setActiveExplainModal(null);
    playFreqSound('click');

    const systemPrompt = "You are a professional Cloud Native architect and highly expert Kubernetes trainer conducting a conceptual deep-dive.";
    const prompt = `Provide a comprehensive technical explanation for the following KCNA question:
Question: "${q.question}"
Options:
${q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n')}
Correct Answer: "${q.options[q.correctIndex]}"

Include:
1. **Architectural Deep-Dive**: Explain the system architecture behind this component, how it interacts with the control plane or worker nodes, and why the correct option is conceptually perfect.
2. **Industry Analogy**: Provide a crisp real-world metaphor (e.g. shipping yard, restaurant, post office) to solidify understanding.
3. **Hands-On kubectl Sandbox Task**: Provide 2 to 3 standard commands that a developer can execute in minikube or kind to verify, debug, or explore this exact Kubernetes functionality.
Use clear, highly aesthetic markdown layout.`;

    try {
      const explainResponse = await callGeminiAPI(prompt, systemPrompt);
      setActiveExplainModal({
        question: q.question,
        correctOption: q.options[q.correctIndex],
        response: explainResponse
      });
    } catch (err) {
      console.error(err);
      setAiError("Connection to the Gemini SRE node timed out. Please verify your internet routing.");
    } finally {
      setAiLoading(false);
    }
  };

  // 2. AI 7-Day Curriculum Study Planner ✨
  const handleGenerateStudyPlan = async () => {
    setAiLoading(true);
    setAiError("");
    setAiStudyPlan("");
    playFreqSound('click');

    const systemPrompt = "You are an SRE team lead drafting customized certification training syllabi.";
    const prompt = `Based on my current domain statistics, compile a highly organized 7-day study plan to help me master the KCNA certification.
Topic performance logs:
- Kubernetes Fundamentals: ${domainStatistics[0].correct}/${domainStatistics[0].total} solved
- Container Orchestration: ${domainStatistics[1].correct}/${domainStatistics[1].total} solved
- Cloud Native Application Delivery: ${domainStatistics[2].correct}/${domainStatistics[2].total} solved
- Cloud Native Architecture: ${domainStatistics[3].correct}/${domainStatistics[3].total} solved

Please formulate a daily syllabus focusing heavily on my weakest domains, providing:
1. Targeted CNCF documentation reading targets.
2. Practical laboratory goals using minikube or docker-desktop.
3. Exam strategy checkpoints.
Keep it extremely encouraging and highly professional.`;

    try {
      const plannerResponse = await callGeminiAPI(prompt, systemPrompt);
      setAiStudyPlan(plannerResponse);
      playFreqSound('success');
    } catch (err) {
      console.error(err);
      setAiError("Study plan build pipeline failed. Please retry to connect with SRE planner.");
    } finally {
      setAiLoading(false);
    }
  };

  // 3. AI Sandbox Dynamic Question Generation ✨ (Uses structured JSON schema output)
  const handleGenerateSandboxQuestion = async (targetDomain) => {
    setAiLoading(true);
    setAiError("");
    setGeneratedQuestion(null);
    setSandboxAnswerSelected(null);
    setSandboxVerified(false);
    playFreqSound('click');

    const systemPrompt = "You are a CNCF certification curriculum validator. Always output a valid JSON object matching the requested schema.";
    const userPrompt = `Generate a single challenging, highly conceptual multiple choice question for the KCNA (Kubernetes and Cloud Native Associate) exam in the domain of '${targetDomain || sandboxDomain}'. Provide exactly 4 plausible options, a correctIndex (0-3), and a deep system-level explanation for the solution. Avoid basic trivia; focus on real-world system behaviors.`;

    const apiKey = "";
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userPrompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            generationConfig: {
              responseMimeType: "application/json",
              responseSchema: {
                type: "OBJECT",
                properties: {
                  question: { type: "STRING" },
                  options: { 
                    type: "ARRAY", 
                    items: { type: "STRING" },
                    minItems: 4,
                    maxItems: 4
                  },
                  correctIndex: { type: "INTEGER" },
                  explanation: { type: "STRING" }
                },
                required: ["question", "options", "correctIndex", "explanation"]
              }
            }
          })
        });
        
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const parsed = JSON.parse(text);
          setGeneratedQuestion(parsed);
          setAiLoading(false);
          playFreqSound('success');
          return;
        }
        throw new Error("Invalid output received.");
      } catch (err) {
        if (i === 4) {
          console.error(err);
          setAiError("Sandbox generation failed. Verify configuration and try again.");
          setAiLoading(false);
          playFreqSound('failure');
          return;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  // ==========================================
  // CUSTOM MARKDOWN PARSER ENGINE
  // ==========================================
  const handleImportMarkdown = () => {
    if (!rawMarkdown.trim()) return;
    
    try {
      const lines = rawMarkdown.split('\n');
      const parsedQuestions = [];
      let currentDomain = "Kubernetes Fundamentals"; // default
      let currentQuestion = null;
      let nextId = questionBank.length + 100;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // 1. Detect domain headings
        if (line.startsWith('# ') || line.startsWith('## ')) {
          const headerText = line.replace(/^#+\s+/, '').trim();
          if (headerText.toLowerCase().includes('kubernetes fundamentals')) {
            currentDomain = 'Kubernetes Fundamentals';
          } else if (headerText.toLowerCase().includes('container orchestration')) {
            currentDomain = 'Container Orchestration';
          } else if (headerText.toLowerCase().includes('application delivery')) {
            currentDomain = 'Cloud Native Application Delivery';
          } else if (headerText.toLowerCase().includes('architecture')) {
            currentDomain = 'Cloud Native Architecture';
          }
          continue;
        }

        // 2. Detect Question blocks
        const qMatch = line.match(/^###\s+Q(\d+):\s*(.*)/i);
        if (qMatch) {
          if (currentQuestion) {
            parsedQuestions.push(currentQuestion);
          }
          currentQuestion = {
            id: nextId++,
            domain: currentDomain,
            question: qMatch[2].trim(),
            options: [],
            correctIndex: -1,
            explanation: "",
            source: "Imported Workspace"
          };
          continue;
        }

        if (!currentQuestion) continue;

        // 3. Detect Options (A-D)
        const optMatch = line.match(/^([A-D])\.\s*(.*)/i);
        if (optMatch) {
          currentQuestion.options.push(optMatch[2].trim());
          continue;
        }

        // 4. Detect Correct Answer
        const ansMatch = line.match(/^\*\*Correct Answer:\*\*\s*([A-D])\.\s*(.*)/i) || 
                         line.match(/^Correct Answer:\s*([A-D])\./i) ||
                         line.match(/^\*\*Correct Answer:\*\*\s*([A-D])/i);
        if (ansMatch) {
          const letter = ansMatch[1].toUpperCase();
          currentQuestion.correctIndex = letter.charCodeAt(0) - 65; // A=0, B=1...
          continue;
        }

        // 5. Detect Explanation and quotes
        if (line.startsWith('>') || line.startsWith('**Explanation:**')) {
          let expText = line.replace(/^>\s*/, '').replace(/^\*\*Explanation:\*\*\s*/, '').trim();
          
          while (i + 1 < lines.length && (lines[i+1].trim().startsWith('>') || lines[i+1].trim().startsWith('*Source:'))) {
            i++;
            const nextLine = lines[i].trim();
            if (nextLine.startsWith('*Source:')) {
              currentQuestion.source = nextLine.replace(/^\*Source:\s*/, '').replace(/\*$/, '').trim();
            } else {
              expText += " " + nextLine.replace(/^>\s*/, '').trim();
            }
          }
          currentQuestion.explanation = expText;
          continue;
        }

        // 6. Handle multi-line question text
        if (currentQuestion.options.length === 0 && line !== "" && !line.startsWith('###')) {
          currentQuestion.question += " " + line;
        }
      }

      if (currentQuestion) {
        parsedQuestions.push(currentQuestion);
      }

      if (parsedQuestions.length > 0) {
        setQuestionBank(prev => [...prev, ...parsedQuestions]);
        setImportStatus({ success: true, count: parsedQuestions.length });
        setRawMarkdown('');
        playFreqSound('success');
      } else {
        setImportStatus({ success: false, count: 0 });
        playFreqSound('failure');
      }
    } catch (err) {
      console.error(err);
      setImportStatus({ success: false, count: 0 });
      playFreqSound('failure');
    }
  };

  // ==========================================
  // ACTION HANDLERS
  // ==========================================
  const selectOption = (optIndex) => {
    playFreqSound('click');
    const qId = filteredQuestions[currentQuestionIndex].id;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIndex }));
  };

  const toggleFlag = () => {
    playFreqSound('click');
    const qId = filteredQuestions[currentQuestionIndex].id;
    setFlaggedQuestions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleNext = () => {
    playFreqSound('click');
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    playFreqSound('click');
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans select-none antialiased">
      
      {/* ==========================================
          HEADER MENU
          ========================================== */}
      <header className="border-b border-slate-800 bg-[#04060a]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600/20 p-2 rounded-xl border border-indigo-500/30">
            <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">KCNA Portal</span>
            <h1 className="text-base font-black tracking-tight text-white">System Environment</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <button onClick={() => { playFreqSound('click'); setActiveMode('dashboard'); }} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeMode === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}>Dashboard</button>
          <button onClick={() => { playFreqSound('click'); setActiveMode('study'); }} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeMode === 'study' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}>Study Mode</button>
          <button onClick={() => { playFreqSound('click'); prepareRandomTestingMode(); }} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeMode === 'testing' ? 'bg-rose-600 text-white' : 'text-rose-400 hover:bg-rose-500/10'}`}>Testing Mode (50 Qs)</button>
          <button onClick={() => { playFreqSound('click'); setActiveMode('import'); }} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${activeMode === 'import' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800/50'}`}>Import Bank</button>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setSoundEnabled(!soundEnabled)} className={`p-2 rounded-lg border ${soundEnabled ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : 'text-slate-500 bg-slate-800/50 border-transparent'}`}>
            <span className="text-xs font-bold font-mono px-1">{soundEnabled ? 'AUDIO ON' : 'MUTED'}</span>
          </button>
        </div>
      </header>

      {/* DYNAMIC GEMINI LOADING HUD */}
      {aiLoading && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-bold tracking-widest text-indigo-400 animate-pulse uppercase">Querying Gemini SRE Model Node...</p>
        </div>
      )}

      {/* ERROR HUD */}
      {aiError && (
        <div className="bg-rose-950/80 border border-rose-500/40 p-4 mx-6 mt-4 rounded-xl flex items-center justify-between animate-fadeIn">
          <span className="text-xs font-bold text-rose-300">{aiError}</span>
          <button onClick={() => setAiError("")} className="text-rose-400 text-xs font-bold hover:underline">Dismiss</button>
        </div>
      )}

      {/* DASHBOARD VIEW */}
      {activeMode === 'dashboard' && (
        <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-6">
          <div className="bg-gradient-to-br from-[#111827] to-[#0b101d] p-6 md:p-8 rounded-3xl border border-slate-800 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">SRE Core Syllabus</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Kubernetes & Cloud Native Knowledge Base</h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl">Deploy adaptive mock assessments using exactly 50 randomly pulled questions to benchmark your performance scores before final verification checkouts.</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <button onClick={() => prepareRandomTestingMode()} className="bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all">Launch Testing Mode (50 Random Qs)</button>
              <button onClick={() => setActiveMode('study')} className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all">Enter Basic Study Hub</button>
              <button onClick={handleGenerateStudyPlan} className="bg-indigo-650 hover:bg-indigo-500 text-white font-black text-xs px-5 py-3 rounded-xl border border-indigo-500/30 flex items-center gap-1.5 transition-all">Generate AI Study Plan ✨</button>
            </div>
          </div>

          {/* SRE Study Planner block */}
          {aiStudyPlan && (
            <div className="bg-gradient-to-br from-[#0c1325] to-[#060a14] border border-indigo-500/20 p-6 rounded-3xl space-y-4 animate-fadeIn relative">
              <div className="absolute top-4 right-4">
                <button onClick={() => setAiStudyPlan("")} className="text-slate-400 hover:text-white text-xs font-bold">✕ Close Plan</button>
              </div>
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <span className="text-indigo-400 text-lg">✨</span>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">Custom 7-Day AI Syllabus Strategy</h3>
              </div>
              <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap select-text h-96 overflow-y-auto pr-3 font-mono">
                {aiStudyPlan}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl"><span className="text-[10px] uppercase font-bold text-slate-500">Embedded Bank</span><p className="text-2xl font-black text-indigo-400 mt-1">{questionBank.length} Qs</p></div>
            <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl"><span className="text-[10px] uppercase font-bold text-slate-500">Solved Indices</span><p className="text-2xl font-black text-emerald-400 mt-1">{Object.keys(selectedAnswers).length}</p></div>
            <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl"><span className="text-[10px] uppercase font-bold text-slate-500">Flagged Queries</span><p className="text-2xl font-black text-amber-400 mt-1">{Object.values(flaggedQuestions).filter(Boolean).length}</p></div>
            <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl"><span className="text-[10px] uppercase font-bold text-slate-500">Accuracy Vector</span><p className="text-2xl font-black text-blue-400 mt-1">{overallReadiness}%</p></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Domain stats */}
            <div className="lg:col-span-2 bg-[#0e1424] border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Domain Performance Matrix</h3>
              <div className="space-y-4">
                {domainStatistics.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold"><span className="text-slate-300">{stat.name}</span><span className="font-mono text-slate-400">{stat.correct}/{stat.total} ({stat.rate}%)</span></div>
                    <div className="h-2 w-full bg-[#05070c] rounded-full overflow-hidden border border-slate-800"><div className={`h-full transition-all duration-300 ${stat.rate >= 75 ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${stat.rate}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Practice Sandbox ✨ */}
            <div className="bg-gradient-to-br from-[#0c1425] to-[#070b14] border border-indigo-500/20 p-6 rounded-3xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase text-indigo-400 tracking-wider">
                  <span>✨</span> AI Practice Sandbox
                </div>
                <h3 className="text-sm font-black text-slate-200">On-Demand Challenging Mock Questions</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Choose a core KCNA domain and request Gemini to dynamically formulate an ultra-realistic conceptual checkpoint question.</p>
                
                <select value={sandboxDomain} onChange={(e) => setSandboxDomain(e.target.value)} className="w-full bg-[#05070c] border border-slate-700 text-xs font-bold p-2.5 rounded-lg focus:outline-none mt-2 text-slate-300">
                  <option value="Kubernetes Fundamentals">Kubernetes Fundamentals</option>
                  <option value="Container Orchestration">Container Orchestration</option>
                  <option value="Cloud Native Application Delivery">Cloud Native Application Delivery</option>
                  <option value="Cloud Native Architecture">Cloud Native Architecture</option>
                </select>
              </div>

              <button onClick={() => handleGenerateSandboxQuestion(sandboxDomain)} className="w-full bg-indigo-650 hover:bg-indigo-500 text-white font-bold py-3 text-xs uppercase tracking-wider rounded-xl transition-all border border-indigo-500/30">Generate Challenger Question ✨</button>
            </div>
          </div>

          {/* AI Sandbox Question Presentation */}
          {generatedQuestion && (
            <div className="bg-[#0e1424] border-2 border-indigo-500/30 p-6 rounded-3xl space-y-4 animate-fadeIn relative select-text">
              <div className="absolute top-4 right-4">
                <button onClick={() => setGeneratedQuestion(null)} className="text-slate-400 hover:text-white text-xs font-bold">✕ Close Sandbox</button>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs font-black text-indigo-400 uppercase tracking-widest flex items-center gap-1">✨ Sandbox Session: {sandboxDomain}</span>
              </div>
              
              <h4 className="text-sm font-bold text-slate-200">{generatedQuestion.question}</h4>
              
              <div className="space-y-2 pt-2">
                {generatedQuestion.options.map((opt, idx) => {
                  let optColor = "border-slate-800 bg-[#05070c]/50 hover:bg-[#05070c]";
                  if (sandboxAnswerSelected === idx) optColor = "border-indigo-500 bg-indigo-500/10 text-white";
                  if (sandboxVerified) {
                    if (idx === generatedQuestion.correctIndex) optColor = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                    else if (sandboxAnswerSelected === idx) optColor = "border-rose-500 bg-rose-500/10 text-rose-300";
                  }

                  return (
                    <button 
                      key={idx} 
                      onClick={() => !sandboxVerified && setSandboxAnswerSelected(idx)}
                      disabled={sandboxVerified}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center gap-3 ${optColor}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-[10px]">{String.fromCharCode(65 + idx)}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                <button 
                  onClick={() => {
                    setSandboxVerified(true);
                    playFreqSound(sandboxAnswerSelected === generatedQuestion.correctIndex ? 'success' : 'failure');
                  }} 
                  disabled={sandboxAnswerSelected === null || sandboxVerified}
                  className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                >
                  Verify Sandbox Choice
                </button>
                <button onClick={() => handleGenerateSandboxQuestion(sandboxDomain)} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-4 py-2 rounded-xl border border-slate-700 transition-all">Generate Next Question ✨</button>
              </div>

              {sandboxVerified && (
                <div className="bg-[#05070c] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
                  <span className="text-indigo-400 font-extrabold uppercase tracking-wider block text-[10px]">Architect Summary</span>
                  <p>{generatedQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}
        </main>
      )}

      {/* STUDY MODE CONTAINER */}
      {activeMode === 'study' && (
        <main className="flex-1 max-w-4xl w-full mx-auto p-6 space-y-6">
          <div className="bg-[#0e1424] border border-slate-800 p-4 rounded-xl flex items-center justify-between">
            <select value={selectedDomain} onChange={(e) => { playFreqSound('click'); setSelectedDomain(e.target.value); setCurrentQuestionIndex(0); }} className="bg-[#05070c] border border-slate-700 text-xs font-bold p-2 rounded-lg focus:outline-none text-slate-300">
              <option value="All">All Core Domains</option>
              <option value="Kubernetes Fundamentals">Kubernetes Fundamentals</option>
              <option value="Container Orchestration">Container Orchestration</option>
              <option value="Cloud Native Application Delivery">Cloud Native Application Delivery</option>
              <option value="Cloud Native Architecture">Cloud Native Architecture</option>
            </select>
            <span className="text-xs text-slate-400 font-bold font-mono">Index {currentQuestionIndex + 1} of {filteredQuestions.length}</span>
          </div>

          {filteredQuestions.length > 0 ? (
            <div className="bg-[#0e1424]/40 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">{filteredQuestions[currentQuestionIndex].domain}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleAiExplainQuestion(filteredQuestions[currentQuestionIndex])} className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-all flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded">
                    Explain with AI ✨
                  </button>
                  <button onClick={toggleFlag} className={`text-xs font-mono font-bold ${flaggedQuestions[filteredQuestions[currentQuestionIndex].id] ? 'text-amber-400' : 'text-slate-500'}`}>{flaggedQuestions[filteredQuestions[currentQuestionIndex].id] ? '🚩 Flagged' : '🏳️ Flag Q'}</button>
                </div>
              </div>
              <h4 className="text-sm md:text-base font-bold text-slate-100">{filteredQuestions[currentQuestionIndex].question}</h4>
              <div className="space-y-2">
                {filteredQuestions[currentQuestionIndex].options.map((option, idx) => {
                  const qId = filteredQuestions[currentQuestionIndex].id;
                  const isSelected = selectedAnswers[qId] === idx;
                  const isChecked = studyFeedback[qId]?.checked;
                  const isCorrect = filteredQuestions[currentQuestionIndex].correctIndex === idx;
                  let btnColor = "border-slate-800 bg-[#05070c]/50 hover:bg-[#05070c]";
                  if (isSelected) btnColor = "border-indigo-500 bg-indigo-500/10 text-white";
                  if (isChecked) {
                    if (isCorrect) btnColor = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                    else if (isSelected) btnColor = "border-rose-500 bg-rose-500/10 text-rose-300";
                  }
                  return (
                    <button key={idx} onClick={() => !isChecked && selectOption(idx)} disabled={isChecked} className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center gap-3 ${btnColor}`}><span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center font-bold text-[10px]">{String.fromCharCode(65 + idx)}</span>{option}</button>
                  );
                })}
              </div>

              <div className="flex justify-between border-t border-slate-800 pt-4">
                <button onClick={() => {
                  const q = filteredQuestions[currentQuestionIndex];
                  const chosen = selectedAnswers[q.id];
                  if (chosen === undefined) return;
                  const correct = chosen === q.correctIndex;
                  setStudyFeedback(prev => ({ ...prev, [q.id]: { checked: true, correct } }));
                  playFreqSound(correct ? 'success' : 'failure');
                }} disabled={selectedAnswers[filteredQuestions[currentQuestionIndex].id] === undefined || studyFeedback[filteredQuestions[currentQuestionIndex].id]?.checked} className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl">Verify Choice</button>
                <div className="flex gap-1"><button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="p-2.5 bg-slate-800 rounded-xl disabled:opacity-30">◀</button><button onClick={handleNext} disabled={currentQuestionIndex === filteredQuestions.length - 1} className="p-2.5 bg-slate-800 rounded-xl disabled:opacity-30">▶</button></div>
              </div>

              {studyFeedback[filteredQuestions[currentQuestionIndex].id]?.checked && (
                <div className="bg-[#05070c] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1"><span className="text-indigo-400 font-extrabold uppercase tracking-wider block text-[10px]">Technical Specs</span><p>{filteredQuestions[currentQuestionIndex].explanation}</p></div>
              )}
            </div>
          ) : <p className="text-center text-slate-500 py-10">No parameters mapped.</p>}
        </main>
      )}

      {/* TIMED EXPLANATORY DIALOG MODAL ✨ */}
      {activeExplainModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0e1424] border border-indigo-500/30 max-w-2xl w-full rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl animate-fadeIn relative select-text">
            <button onClick={() => setActiveExplainModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold">✕ Close</button>
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="text-indigo-400">✨</span>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">Gemini SRE Deep-Dive Analysis</h3>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-slate-400">Analysis of the question:</p>
              <h4 className="text-sm font-black text-white">{activeExplainModal.question}</h4>
              <p className="text-xs text-emerald-400 font-bold font-mono">Validated Solution: {activeExplainModal.correctOption}</p>
            </div>
            <div className="bg-[#05070c] p-5 rounded-2xl border border-slate-800 text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap h-96 overflow-y-auto pr-3 font-mono">
              {activeExplainModal.response}
            </div>
          </div>
        </div>
      )}

      {/* TESTING MODE WORKSPACE */}
      {activeMode === 'testing' && (
        <div className="flex-1 flex flex-col bg-slate-50 text-slate-900 select-text">
          <div className="bg-[#0b101d] text-white px-6 py-4 flex items-center justify-between shrink-0">
            <span className="text-xs font-black uppercase tracking-wider text-slate-300">Testing Mode Simulator // Core Assessment</span>
            <div className="flex items-center gap-3 font-mono">
              <span className="text-xs text-slate-400">Timer:</span>
              {!isTimerHidden ? <span className="text-sm font-bold text-rose-400">{formatTime(examTimer)}</span> : <span className="text-xs text-slate-500">[Hidden]</span>}
              <button onClick={() => setIsTimerHidden(!isTimerHidden)} className="bg-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">Toggle</button>
            </div>
          </div>

          <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-slate-600">Question {currentQuestionIndex + 1} of {filteredQuestions.length}</span>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-slate-700"><input type="checkbox" checked={!!flaggedQuestions[filteredQuestions[currentQuestionIndex].id]} onChange={toggleFlag} className="rounded text-indigo-600" /> Flag Index</label>
              <button onClick={() => setShowCalculator(!showCalculator)} className="bg-white border border-slate-300 text-[11px] font-bold px-2.5 py-1 rounded">Calculator</button>
            </div>
          </div>

          <div className="flex-1 p-6 md:p-8 overflow-y-auto">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-[9px] uppercase font-bold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded tracking-widest">{filteredQuestions[currentQuestionIndex].domain}</span>
              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-relaxed border-b border-slate-100 pb-3">{filteredQuestions[currentQuestionIndex].question}</h3>
              <div className="space-y-3">
                {filteredQuestions[currentQuestionIndex].options.map((option, idx) => {
                  const isSelected = selectedAnswers[filteredQuestions[currentQuestionIndex].id] === idx;
                  return (
                    <label key={idx} className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-200 hover:bg-slate-50'}`}>
                      <input type="radio" checked={isSelected} onChange={() => selectOption(idx)} className="mt-0.5 text-indigo-600" />
                      <span className="text-xs md:text-sm font-medium text-slate-800"><strong className="text-slate-400 mr-1.5">{String.fromCharCode(65 + idx)}.</strong>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {showCalculator && (
            <div className="absolute bottom-20 left-6 bg-[#0a0f1d] text-white p-3 rounded-xl border border-slate-800 shadow-2xl z-50 w-52 font-mono">
              <div className="bg-black p-2 rounded text-right text-sm mb-2 h-8 truncate">{calcInput || '0'}</div>
              <div className="grid grid-cols-4 gap-1 text-xs">
                {['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'].map(b => (
                  <button key={b} onClick={() => handleCalcBtn(b)} className="p-2 bg-slate-800 rounded hover:bg-slate-700">{b}</button>
                ))}
              </div>
            </div>
          )}

          <div className="bg-slate-200 px-6 py-3.5 flex items-center justify-between shrink-0">
            <button onClick={() => setActiveMode('review')} className="bg-[#111827] hover:bg-slate-800 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg">Navigator Review Map</button>
            <div className="flex gap-2"><button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold disabled:opacity-40">Previous</button><button onClick={handleNext} disabled={currentQuestionIndex === filteredQuestions.length - 1} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold disabled:opacity-40">Next</button></div>
          </div>
        </div>
      )}

      {/* TESTING MATRIX REVIEW SCREEN */}
      {activeMode === 'review' && (
        <main className="flex-1 max-w-4xl w-full mx-auto p-6 space-y-6">
          <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl space-y-1">
            <h2 className="text-lg font-black text-white">Active Test Navigator Grid</h2>
            <p className="text-xs text-slate-400">Ensure all metrics are locked in before submitting data vectors for final compilation metrics.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2.5">
            {filteredQuestions.map((q, idx) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isFlagged = flaggedQuestions[q.id];
              return (
                <button key={q.id} onClick={() => { playFreqSound('click'); setCurrentQuestionIndex(idx); setActiveMode('testing'); }} className={`p-2 rounded-xl border text-center flex flex-col justify-between h-14 font-mono text-[11px] ${isFlagged ? 'border-amber-500 bg-amber-500/10' : isAnswered ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-800 bg-slate-900/40'}`}>
                  <span className="text-slate-500 font-bold">Q{idx + 1}</span>
                  <span className="text-white font-black">{isAnswered ? 'DONE' : 'FILL'}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center border-t border-slate-800 pt-4">
            <button onClick={() => setActiveMode('testing')} className="bg-slate-800 px-4 py-2 rounded-lg text-xs font-bold border border-slate-700">Resume Test View</button>
            <button onClick={handleFinishExam} className="bg-rose-600 hover:bg-rose-500 px-5 py-2.5 rounded-lg text-xs font-extrabold text-white">Submit Absolute Evaluation</button>
          </div>
        </main>
      )}

      {/* RESULTS DISPLAY VIEW */}
      {activeMode === 'results' && (
        <main className="flex-1 max-w-3xl w-full mx-auto p-6 space-y-6">
          {(() => {
            const pool = activeTestQuestions.length > 0 ? activeTestQuestions : questionBank;
            const correctCount = pool.filter(q => selectedAnswers[q.id] === q.correctIndex).length;
            const score = Math.round((correctCount / pool.length) * 100);
            const passed = score >= 75;

            return (
              <>
                <div className={`p-8 rounded-3xl text-center space-y-3 border ${passed ? 'bg-emerald-950/40 border-emerald-500/20' : 'bg-rose-950/40 border-rose-500/20'}`}>
                  <span className="text-[10px] font-black uppercase tracking-widest block">{passed ? 'PASS VECTOR VALIDATED' : 'CRITICAL TRIAGE REQUIRED'}</span>
                  <h2 className="text-3xl font-black text-white">Evaluation Score: {score}%</h2>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">{passed ? 'Excellent structural retention. You cleared the standard 75% system correctness vector.' : 'Retention metrics fell below target thresholds. Review structural telemetry nodes below.'}</p>
                  <div className="flex justify-center gap-2 pt-2">
                    <button onClick={prepareRandomTestingMode} className="bg-white text-slate-950 font-black text-xs px-4 py-2 rounded-lg">Run Fresh Timed Simulation</button>
                    <button onClick={() => setActiveMode('dashboard')} className="bg-slate-800 border border-slate-700 text-xs font-bold px-4 py-2 rounded-lg">Return Home</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs uppercase font-black text-slate-400 tracking-wider">Session Breakdown Matrix</h3>
                  {pool.map((q, idx) => {
                    const chosen = selectedAnswers[q.id];
                    const correct = chosen === q.correctIndex;
                    return (
                      <div key={q.id} className="bg-[#0e1424] border border-slate-800 p-4 rounded-xl text-xs space-y-2">
                        <div className="flex justify-between text-[10px] uppercase font-bold"><span className="text-slate-500">Q{idx + 1} - {q.domain}</span><span className={correct ? 'text-emerald-400' : 'text-rose-400'}>{correct ? 'PASS' : 'FAIL'}</span></div>
                        <p className="font-bold text-slate-200">{q.question}</p>
                        <p className="text-slate-400">Selection: <span className={correct ? 'text-emerald-400' : 'text-rose-400'}>{chosen !== undefined ? q.options[chosen] : '[Skipped Parameter]'}</span></p>
                        {!correct && <p className="text-slate-400">Target Vector: <span className="text-emerald-400 font-bold">{q.options[q.correctIndex]}</span></p>}
                        <div className="bg-[#05070c] p-3 rounded-lg border border-slate-800/60 text-slate-400">{q.explanation}</div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}
        </main>
      )}

      {/* RAW TEXT FIELD IMPORTER VIEW */}
      {activeMode === 'import' && (
        <main className="flex-1 max-w-3xl w-full mx-auto p-6 space-y-4">
          <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl">
            <h2 className="text-base font-black text-white">Dynamic Markdown Database Core Parser</h2>
            <p className="text-xs text-slate-400 mt-1">Scale runtime assets dynamically. Dump layout text arrays matching your verbatim file configurations directly into the parsing stack window.</p>
          </div>

          <textarea value={rawMarkdown} onChange={(e) => setRawMarkdown(e.target.value)} placeholder="Paste any raw question data dumps here... (Format template: ### Q1: text...)" className="w-full h-72 bg-[#05070c] border border-slate-700/80 p-4 rounded-xl font-mono text-xs focus:outline-none focus:border-indigo-500" />
          
          {importStatus && (
            <div className={`p-3 rounded-lg text-xs font-bold font-mono ${importStatus.success ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
              {importStatus.success ? `SUCCESS // INTEGRATED ${importStatus.count} NEW QUESTIONS INTO RUNTIME GENERATORS` : 'PARSE REJECTED // ENSURE CONFIGS MATCH VALID SYLLABUS STRING TEMPLATES'}
            </div>
          )}

          <button onClick={handleImportMarkdown} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 text-xs uppercase tracking-wider rounded-xl transition-all">Compile Assets Into Active Shuffler</button>
        </main>
      )}

      <footer className="bg-[#04060a] border-t border-slate-900 text-center py-3 text-[10px] font-mono font-bold text-slate-600 select-none mt-auto">
        LOCAL DESKTOP ASSESSMENT FRAMEWORK // DATA STORAGE LOGS LOCALIZED // STATUS: STEADY
      </footer>
    </div>
  );
}