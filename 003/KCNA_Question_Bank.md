# KCNA Question Bank — Curriculum Research Artifact

**Purpose:** Curriculum design and training content development for the Kubernetes and Cloud Native Associate (KCNA) certification.
**Total questions:** 292

## Domain Coverage

| Domain | Questions | Exam Weight |
|--------|-----------|-------------|
| Kubernetes Fundamentals | 113 | 44% |
| Container Orchestration | 78 | 28% |
| Cloud Native Application Delivery | 45 | 16% |
| Cloud Native Architecture | 55 | 12% |

---

# Kubernetes Fundamentals
**Exam Weight: 44%** | **Questions in this section: 113**

### Q1: Which Kubernetes component acts as the front-end API for the cluster?

A. etcd  
B. kube-scheduler  
C. kube-apiserver  
D. controller-manager  

**Correct Answer:** C. kube-apiserver

> **Explanation:** The kube-apiserver is the central management component that exposes the Kubernetes API. All cluster communication passes through it.

*Source: KCNA Supplemental Bank*

---

### Q2: What is the purpose of the controller-manager in Kubernetes?

A. To schedule pods on nodes  
B. To store cluster state  
C. To run controller loops that regulate cluster state  
D. To proxy network traffic  

**Correct Answer:** C. To run controller loops that regulate cluster state

> **Explanation:** The controller-manager runs multiple controllers (Node, Replication, Endpoints, ServiceAccount) that watch the API server and work to make the current state match the desired state.

*Source: KCNA Supplemental Bank*

---

### Q3: What kubectl command opens an interactive shell inside a running pod?

A. kubectl enter <pod>  
B. kubectl exec -it <pod> -- /bin/sh  
C. kubectl shell <pod>  
D. kubectl attach <pod>  

**Correct Answer:** B. kubectl exec -it <pod> -- /bin/sh

> **Explanation:** kubectl exec -it <pod> -- /bin/sh opens an interactive terminal. The -i flag keeps stdin open; -t allocates a TTY.

*Source: KCNA Supplemental Bank*

---

### Q4: What is the purpose of a liveness probe in Kubernetes?

A. To determine when a container is ready to accept traffic  
B. To detect and restart unhealthy containers  
C. To check resource consumption  
D. To monitor network connectivity  

**Correct Answer:** B. To detect and restart unhealthy containers

> **Explanation:** Liveness probes determine if a container is alive. If the probe fails, the container is killed and restarted according to the pod's restartPolicy.

*Source: KCNA Supplemental Bank*

---

### Q5: What is the difference between a liveness probe and a readiness probe?

A. Liveness restarts the container; readiness removes it from service endpoints  
B. They are identical  
C. Readiness restarts the container; liveness removes it from endpoints  
D. Liveness is for startup; readiness is for runtime  

**Correct Answer:** A. Liveness restarts the container; readiness removes it from service endpoints

> **Explanation:** Liveness probe failure = container restarts. Readiness probe failure = pod removed from Service endpoints (traffic stops) but container keeps running.

*Source: KCNA Supplemental Bank*

---

### Q6: What is a ConfigMap used for?

A. Storing encrypted passwords  
B. Storing non-sensitive configuration data  
C. Defining RBAC policies  
D. Managing container images  

**Correct Answer:** B. Storing non-sensitive configuration data

> **Explanation:** ConfigMaps store non-sensitive key-value configuration data that can be consumed by pods as environment variables, command-line arguments, or config files in volumes.

*Source: KCNA Supplemental Bank*

---

### Q7: How can a pod consume a ConfigMap?

A. As environment variables only  
B. As a mounted volume only  
C. As environment variables or mounted as files in a volume  
D. Only through the Kubernetes API  

**Correct Answer:** C. As environment variables or mounted as files in a volume

> **Explanation:** ConfigMaps and Secrets can both be consumed as environment variables (individual keys or all keys) or mounted as files in a volume.

*Source: KCNA Supplemental Bank*

---

### Q8: What is RBAC in Kubernetes?

A. Runtime-Based Access Control  
B. Role-Based Access Control for managing permissions  
C. Resource-Based Admission Control  
D. Registry-Based Authentication Control  

**Correct Answer:** B. Role-Based Access Control for managing permissions

> **Explanation:** RBAC regulates access to cluster resources. Roles define permissions; RoleBindings assign roles to users, groups, or service accounts.

*Source: KCNA Supplemental Bank*

---

### Q9: What is the difference between a Role and a ClusterRole?

A. Role is for nodes; ClusterRole is for pods  
B. Role is namespace-scoped; ClusterRole is cluster-wide  
C. Role uses RBAC; ClusterRole uses ABAC  
D. There is no difference  

**Correct Answer:** B. Role is namespace-scoped; ClusterRole is cluster-wide

> **Explanation:** Role grants permissions within a specific namespace. ClusterRole grants permissions across the entire cluster or to non-namespaced resources (nodes, PVs).

*Source: KCNA Supplemental Bank*

---

### Q10: What does the kubectl get pods -o wide command show in addition to standard output?

A. Pod logs  
B. Pod IP address and node name  
C. Pod resource usage  
D. Pod environment variables  

**Correct Answer:** B. Pod IP address and node name

> **Explanation:** The -o wide flag adds additional columns: NODE (which node the pod runs on), IP (pod IP address), NOMINATED NODE, and READINESS GATES.

*Source: KCNA Supplemental Bank*

---

### Q11: What is a Kubernetes Deployment rollout?

A. Deleting and recreating all pods at once  
B. Gradually replacing old pod replicas with new ones  
C. Scaling up without replacing pods  
D. Migrating pods between namespaces  

**Correct Answer:** B. Gradually replacing old pod replicas with new ones

> **Explanation:** A rollout (rolling update) replaces old pods with new ones incrementally. The maxSurge and maxUnavailable parameters control the rollout pace.

*Source: KCNA Supplemental Bank*

---

### Q12: How do you roll back a Kubernetes deployment?

A. kubectl revert deployment <name>  
B. kubectl rollout undo deployment/<name>  
C. kubectl delete deployment <name>  
D. kubectl rollback deployment <name>  

**Correct Answer:** B. kubectl rollout undo deployment/<name>

> **Explanation:** kubectl rollout undo reverts the deployment to the previous revision. Add --to-revision=N to roll back to a specific revision.

*Source: KCNA Supplemental Bank*

---

### Q13: What is a Kubernetes Ingress resource?

A. A type of storage volume  
B. A set of rules for routing external HTTP/HTTPS traffic to services  
C. A method for pod-to-pod communication  
D. A container runtime interface  

**Correct Answer:** B. A set of rules for routing external HTTP/HTTPS traffic to services

> **Explanation:** Ingress resources define rules for routing external HTTP/HTTPS traffic. They require an Ingress controller to implement the rules.

*Source: KCNA Supplemental Bank*

---

### Q14: Which command checks the rollout status of a deployment?

A. kubectl get deployment <name>  
B. kubectl rollout status deployment/<name>  
C. kubectl describe rollout <name>  
D. kubectl status deployment <name>  

**Correct Answer:** B. kubectl rollout status deployment/<name>

> **Explanation:** kubectl rollout status watches the rollout progress and reports when it's complete or if it fails.

*Source: KCNA Supplemental Bank*

---

### Q15: What is the purpose of resource limits in Kubernetes?

A. To guarantee minimum resources for scheduling  
B. To cap the maximum resources a container can consume  
C. To monitor resource usage  
D. To allocate dedicated CPU cores  

**Correct Answer:** B. To cap the maximum resources a container can consume

> **Explanation:** Resource limits set the maximum CPU/memory a container can use. If a container exceeds its memory limit, it's killed (OOMKilled). CPU limits throttle the container.

*Source: KCNA Supplemental Bank*

---

### Q16: What Kubernetes object would you use to run a one-off database migration?

A. Deployment  
B. CronJob  
C. Job  
D. StatefulSet  

**Correct Answer:** C. Job

> **Explanation:** Jobs are designed for batch/one-off tasks that run to completion. A database migration runs once and should complete successfully — exactly what Jobs provide.

*Source: KCNA Supplemental Bank*

---

### Q17: Which of the following is true about a Kubernetes Service of type NodePort?

A. It only works within the cluster  
B. It exposes the service on a static port on every node's IP  
C. It creates an external load balancer  
D. It resolves to an external DNS name  

**Correct Answer:** B. It exposes the service on a static port on every node's IP

> **Explanation:** NodePort services expose a port (30000-32767 by default) on every cluster node's IP. External traffic can reach the service via <NodeIP>:<NodePort>.

*Source: KCNA Supplemental Bank*

---

### Q18: What is the purpose of the kube-dns / CoreDNS component in Kubernetes?

A. To manage network policies  
B. To provide DNS-based service discovery within the cluster  
C. To route external traffic  
D. To monitor pod health  

**Correct Answer:** B. To provide DNS-based service discovery within the cluster

> **Explanation:** CoreDNS (formerly kube-dns) provides DNS resolution within the cluster. Services get DNS names like <service>.<namespace>.svc.cluster.local, enabling pods to discover each other by name.

*Source: KCNA Supplemental Bank*

---

### Q19: What does a ClusterIP service do?

A. Exposes a service externally  
B. Provides a stable virtual IP accessible only within the cluster  
C. Creates an external load balancer  
D. Maps to an external DNS name  

**Correct Answer:** B. Provides a stable virtual IP accessible only within the cluster

> **Explanation:** ClusterIP is the default service type. It assigns a virtual IP that is only reachable from within the cluster, providing stable in-cluster connectivity even as pod IPs change.

*Source: KCNA Supplemental Bank*

---

### Q20: Which kubectl command shows resource quotas for a namespace?

A. kubectl get resourcequotas -n <namespace>  
B. kubectl describe quota <namespace>  
C. kubectl quota list -n <namespace>  
D. kubectl get limits -n <namespace>  

**Correct Answer:** A. kubectl get resourcequotas -n <namespace>

> **Explanation:** ResourceQuotas constrain total resource consumption within a namespace. Use kubectl get resourcequotas (or kubectl get quota) to list them.

*Source: KCNA Supplemental Bank*

---

### Q21: What is the difference between kubectl create and kubectl apply?

A. kubectl create supports all resource types; kubectl apply does not  
B. kubectl create fails if the resource exists; kubectl apply creates or updates  
C. kubectl apply is for deleting resources  
D. They are the same command  

**Correct Answer:** B. kubectl create fails if the resource exists; kubectl apply creates or updates

> **Explanation:** kubectl create is imperative — it fails if the resource already exists. kubectl apply is declarative — it creates if missing or updates if present.

*Source: KCNA Supplemental Bank*

---

### Q22: Which object is used to expose a group of pods as a network service?

A. Deployment  
B. Service  
C. ConfigMap  
D. Pod  

**Correct Answer:** B. Service

> **Explanation:** Services provide stable DNS names and IP addresses for accessing pods. They load-balance across matching pods using label selectors.

*Source: KCNA Supplemental Bank*

---

### Q23: What does the --dry-run=client flag do with kubectl?

A. Runs the command against a test cluster  
B. Simulates the command without creating resources  
C. Executes in verbose mode  
D. Connects to a client cluster  

**Correct Answer:** B. Simulates the command without creating resources

> **Explanation:** --dry-run=client simulates the command locally without sending it to the API server. Combine with -o yaml to generate manifest templates.

*Source: KCNA Supplemental Bank*

---

### Q24: What is a pod template?

A. A pre-built pod configuration from the marketplace  
B. The specification within a controller (Deployment, StatefulSet) that defines how pods are created  
C. A Docker Compose file  
D. A pod that acts as a template for cloning  

**Correct Answer:** B. The specification within a controller (Deployment, StatefulSet) that defines how pods are created

> **Explanation:** The pod template spec (.spec.template) in a Deployment or ReplicaSet defines the desired state for each pod the controller creates.

*Source: KCNA Supplemental Bank*

---

### Q25: How do you force delete a pod stuck in Terminating state?

A. kubectl delete pod <name> --grace-period=0 --force  
B. kubectl remove pod <name>  
C. kubectl kill pod <name>  
D. kubectl terminate pod <name>  

**Correct Answer:** A. kubectl delete pod <name> --grace-period=0 --force

> **Explanation:** Force deletion bypasses the graceful termination period. Use with caution as it may leave the node-side cleanup incomplete.

*Source: KCNA Supplemental Bank*

---

### Q26: What is a multi-container pod?

A. A pod that can run on multiple nodes  
B. A pod containing two or more containers sharing network and storage  
C. A pod with multiple IP addresses  
D. A pod managing multiple namespaces  

**Correct Answer:** B. A pod containing two or more containers sharing network and storage

> **Explanation:** Multi-container pods share the same network namespace (same IP, ports), storage volumes, and lifecycle. Common patterns: sidecar, adapter, ambassador.

*Source: KCNA Supplemental Bank*

---

### Q27: What is the ambassador container pattern?

A. A container that routes traffic to external services on behalf of the main container  
B. A container that collects logs  
C. A container that replaces failed containers  
D. A container that stores configuration  

**Correct Answer:** A. A container that routes traffic to external services on behalf of the main container

> **Explanation:** The ambassador pattern uses a proxy sidecar to connect the main container to external services (e.g., a local proxy to a database cluster). The main container always talks to localhost.

*Source: KCNA Supplemental Bank*

---

### Q28: Which Kubernetes resource limits the number of resources consumed in a namespace?

A. LimitRange  
B. ResourceQuota  
C. PodSecurityPolicy  
D. ClusterRole  

**Correct Answer:** B. ResourceQuota

> **Explanation:** ResourceQuota restricts aggregate resource consumption in a namespace (total CPU, memory, number of pods, PVCs, etc.). LimitRange sets default/max per-pod/container limits.

*Source: KCNA Supplemental Bank*

---

### Q29: What is a LimitRange?

A. A cluster-wide resource cap  
B. A policy that sets default and max/min resource requests and limits per pod/container in a namespace  
C. A network bandwidth limit  
D. A storage size limit for PVCs  

**Correct Answer:** B. A policy that sets default and max/min resource requests and limits per pod/container in a namespace

> **Explanation:** LimitRange auto-applies default resource requests/limits to containers that don't specify them and enforces min/max constraints per namespace.

*Source: KCNA Supplemental Bank*

---

### Q30: What is the Kubernetes API group for apps (Deployments, ReplicaSets, StatefulSets)?

A. v1  
B. apps/v1  
C. extensions/v1beta1  
D. batch/v1  

**Correct Answer:** B. apps/v1

> **Explanation:** Workload resources like Deployment, ReplicaSet, StatefulSet, and DaemonSet belong to the apps/v1 API group. Pods and Services are in the core v1 group.

*Source: KCNA Supplemental Bank*

---

### Q31: What is a finalizer in Kubernetes?

A. A container that runs last in a pod  
B. A metadata key that prevents object deletion until cleanup logic completes  
C. A termination handler for namespaces  
D. A pod shutdown script  

**Correct Answer:** B. A metadata key that prevents object deletion until cleanup logic completes

> **Explanation:** Finalizers prevent object deletion. When you delete an object with finalizers, Kubernetes marks it for deletion and waits for controllers to perform cleanup (e.g., PV reclaim, external resource cleanup) before removing the object.

*Source: KCNA Supplemental Bank*

---

### Q32: What is kubectl port-forward used for?

A. Configuring firewall rules  
B. Forwarding a local port to a port on a pod for debugging  
C. Exposing a pod as a service  
D. Creating a NodePort service  

**Correct Answer:** B. Forwarding a local port to a port on a pod for debugging

> **Explanation:** kubectl port-forward <pod> <local-port>:<pod-port> creates a tunnel from your local machine to a pod, useful for debugging services without exposing them externally.

*Source: KCNA Supplemental Bank*

---

### Q33: What is a Kubernetes manifest?

A. A binary executable for managing clusters  
B. A YAML or JSON file describing a Kubernetes resource's desired state  
C. A container image definition  
D. A Kubernetes audit log  

**Correct Answer:** B. A YAML or JSON file describing a Kubernetes resource's desired state

> **Explanation:** Manifests define Kubernetes resources declaratively. They contain apiVersion, kind, metadata, and spec fields.

*Source: KCNA Supplemental Bank*

---

### Q34: What is the purpose of the metadata.name field in a Kubernetes manifest?

A. To define the container image  
B. To provide a unique identifier for the resource within its namespace  
C. To specify the resource type  
D. To set environment variables  

**Correct Answer:** B. To provide a unique identifier for the resource within its namespace

> **Explanation:** metadata.name is the required unique name for the resource within its namespace (for namespaced resources) or cluster-wide (for non-namespaced resources).

*Source: KCNA Supplemental Bank*

---

### Q35: What does the kubectl top nodes command show?

A. The top 10 most active nodes  
B. CPU and memory utilization for each node  
C. Nodes sorted by pod count  
D. Nodes with the most events  

**Correct Answer:** B. CPU and memory utilization for each node

> **Explanation:** kubectl top nodes shows current CPU usage (cores/millicores and %) and memory usage (bytes and %) for each node. Requires metrics-server to be installed.

*Source: KCNA Supplemental Bank*

---

### Q36: What is a Kubernetes context?

A. A container execution environment  
B. A named configuration specifying a cluster, user, and namespace for kubectl  
C. A pod execution context  
D. A namespace alias  

**Correct Answer:** B. A named configuration specifying a cluster, user, and namespace for kubectl

> **Explanation:** A kubectl context combines a cluster (API server URL + CA), a user (credentials), and optionally a default namespace. Contexts allow switching between multiple clusters easily.

*Source: KCNA Supplemental Bank*

---

### Q37: What does kubectl config use-context do?

A. Creates a new context  
B. Switches the active kubectl context  
C. Deletes a context  
D. Lists all contexts  

**Correct Answer:** B. Switches the active kubectl context

> **Explanation:** kubectl config use-context <context-name> sets the current context. kubectl config get-contexts lists all available contexts with the active one marked.

*Source: KCNA Supplemental Bank*

---

### Q38: What is the significance of apiVersion in a Kubernetes manifest?

A. The version of the Kubernetes CLI  
B. The API group and version that the resource type belongs to  
C. The Kubernetes cluster version  
D. The manifest file format version  

**Correct Answer:** B. The API group and version that the resource type belongs to

> **Explanation:** apiVersion (e.g., v1, apps/v1, batch/v1) tells the API server which version of the API to use to parse the manifest. It ensures backward compatibility as APIs evolve.

*Source: KCNA Supplemental Bank*

---

### Q39: What does kubectl describe node show?

A. The node's container logs  
B. Node capacity, allocatable resources, running pods, and conditions  
C. The node's network interfaces only  
D. The node's BIOS information  

**Correct Answer:** B. Node capacity, allocatable resources, running pods, and conditions

> **Explanation:** kubectl describe node shows: capacity vs. allocatable resources, node conditions (Ready, MemoryPressure, DiskPressure), running pods and their resource usage, and system info.

*Source: KCNA Supplemental Bank*

---

### Q40: Which command checks cluster component health?

A. kubectl health check  
B. kubectl get componentstatuses (or kubectl get cs)  
C. kubectl diagnose cluster  
D. kubectl cluster-status  

**Correct Answer:** B. kubectl get componentstatuses (or kubectl get cs)

> **Explanation:** kubectl get componentstatuses (deprecated but still used) reports the health of etcd, scheduler, and controller-manager. Modern clusters use kubectl get --raw /healthz.

*Source: KCNA Supplemental Bank*

---

### Q41: What is the purpose of the kube-system namespace?

A. A namespace for user applications  
B. A namespace for system-level Kubernetes components and infrastructure pods  
C. A namespace that cannot be used  
D. A namespace for testing only  

**Correct Answer:** B. A namespace for system-level Kubernetes components and infrastructure pods

> **Explanation:** kube-system hosts core components: CoreDNS, kube-proxy, metrics-server, CNI plugins, and cloud controller managers. It is created automatically during cluster setup.

*Source: KCNA Supplemental Bank*

---

### Q42: What is a Kubernetes event?

A. A scheduled job trigger  
B. A record of something that happened to a resource in the cluster  
C. An external webhook call  
D. A monitoring alert  

**Correct Answer:** B. A record of something that happened to a resource in the cluster

> **Explanation:** Kubernetes events record state changes (pod scheduled, image pulled, container started, probe failed). They have a reason, message, and count. Use kubectl get events or kubectl describe <resource> to view them.

*Source: KCNA Supplemental Bank*

---

### Q43: How does the kubelet know which pods to run on a node?

A. Reads from a local config file only  
B. Watches the API server for pods scheduled to its node  
C. Receives commands from kubectl directly  
D. Receives broadcast messages from the scheduler  

**Correct Answer:** B. Watches the API server for pods scheduled to its node

> **Explanation:** The kubelet continuously watches the API server for pods with nodeName matching its node. It then ensures those pods' containers are running via the container runtime.

*Source: KCNA Supplemental Bank*

---

### Q44: What is a static pod in Kubernetes?

A. A pod that never restarts  
B. A pod managed directly by the kubelet from a manifest file on the node, not via the API server  
C. A pod with no volumes  
D. A pod with fixed resource allocations  

**Correct Answer:** B. A pod managed directly by the kubelet from a manifest file on the node, not via the API server

> **Explanation:** Static pods are defined in /etc/kubernetes/manifests/ on a node. The kubelet monitors this directory and creates/restarts pods from these files. Control plane components (etcd, apiserver) are often static pods.

*Source: KCNA Supplemental Bank*

---

### Q45: What is the significance of a Deployment's revision history?

A. It stores pod logs  
B. It allows rolling back to previous ReplicaSet configurations  
C. It records who deployed each version  
D. It stores etcd snapshots  

**Correct Answer:** B. It allows rolling back to previous ReplicaSet configurations

> **Explanation:** Deployments maintain a history of ReplicaSets (controlled by revisionHistoryLimit, default 10). Each ReplicaSet represents a deployment revision, enabling rollback with kubectl rollout undo.

*Source: KCNA Supplemental Bank*

---

### Q46: What is the difference between kubectl get and kubectl describe?

A. kubectl get is for pods; kubectl describe is for nodes  
B. kubectl get lists resources concisely; kubectl describe shows detailed information including events  
C. kubectl describe is deprecated  
D. They output the same information  

**Correct Answer:** B. kubectl get lists resources concisely; kubectl describe shows detailed information including events

> **Explanation:** kubectl get provides a tabular summary. kubectl describe provides full resource details, conditions, events, and related resource information — much more useful for debugging.

*Source: KCNA Supplemental Bank*

---

### Q47: How many containers can run in a Kubernetes pod?

A. Exactly one  
B. One or more  
C. Maximum two  
D. Maximum ten  

**Correct Answer:** B. One or more

> **Explanation:** A pod can contain one or more containers that share the same network namespace, IP address, and storage volumes. Most pods have one container; multi-container pods use patterns like sidecar, ambassador, or adapter.

*Source: KCNA Supplemental Bank*

---

### Q48: What is the default service account behavior for pods?

A. Pods have no service account by default  
B. Pods automatically get the default service account token mounted  
C. Pods must explicitly request a service account  
D. Service accounts are disabled by default  

**Correct Answer:** B. Pods automatically get the default service account token mounted

> **Explanation:** By default, Kubernetes mounts the default service account's token into every pod at /var/run/secrets/kubernetes.io/serviceaccount/. Set automountServiceAccountToken: false to disable this.

*Source: KCNA Supplemental Bank*

---

### Q49: What is a namespace-scoped resource vs. cluster-scoped resource?

A. Namespace-scoped resources are shared; cluster-scoped are isolated  
B. Namespace-scoped resources exist within a namespace; cluster-scoped resources (nodes, PVs, CRDs) exist cluster-wide  
C. Cluster-scoped resources require cluster admin; namespace-scoped do not  
D. There is no practical difference  

**Correct Answer:** B. Namespace-scoped resources exist within a namespace; cluster-scoped resources (nodes, PVs, CRDs) exist cluster-wide

> **Explanation:** Pods, Services, ConfigMaps, Secrets, Deployments are namespace-scoped. Nodes, PersistentVolumes, ClusterRoles, StorageClasses, and CRDs are cluster-scoped.

*Source: KCNA Supplemental Bank*

---

### Q50: The Kubernetes object "Stateful Set" requires which service for the network identity of Pods?

A. ClusterIP  
B. NodePort  
C. LoadBalancer  
D. Headless Service  

**Correct Answer:** D. Headless Service

*Source: moabukar/KCNA GitHub*

---

### Q51: Kubernetes was originally developed by who?

A. Amazon  
B. Google  
C. Microsoft  
D. Facebook  

**Correct Answer:** B. Google

*Source: moabukar/KCNA GitHub*

---

### Q52: What are the TWO types of Kubernetes nodes? Select TWO answers.

A. Worker Node  
B. Internal Node  
C. Control Plane Node  
D. Data plane  

**Correct Answer:** A. Worker Node and C. Control Plane Node

*Source: moabukar/KCNA GitHub*

---

### Q53: What is the name of the agent that runs on each Kubernetes worker node?

A. etcd  
B. kube-API server  
C. kube-proxy  
D. kubelet  

**Correct Answer:** D. kubelet

*Source: moabukar/KCNA GitHub*

---

### Q54: Which of the following is not part of the Control Plane in Kubernetes?

A. etcd  
B. kube-API server  
C. kube scheduler  
D. kube-proxy  

**Correct Answer:** D. kube-proxy

*Source: moabukar/KCNA GitHub*

---

### Q55: Which access control component of Kubernetes is responsible for authorisation?

A. Config Maps  
B. Service Account  
C. Admission Controller  
D. Role-Based Access Control (RBAC)  

**Correct Answer:** D. Role-Based Access Control (RBAC)

*Source: moabukar/KCNA GitHub*

---

### Q56: Which control plane component is responsible for scheduling pods?

A. kubelet  
B. kube controller manager  
C. kube scheduler  
D. kube-proxy  

**Correct Answer:** C. kube scheduler

*Source: moabukar/KCNA GitHub*

---

### Q57: Select TWO commands which can be used to LIST all pods in all namespaces.

A. kubectl get pods  
B. kubectl get pods -n --all  
C. kubectl get pods -A  
D. kubectl get pods --all-namespaces  

**Correct Answer:** C. kubectl get pods -A and D. kubectl get pods --all-namespaces

*Source: moabukar/KCNA GitHub*

---

### Q58: What is the command to list all the available objects in your Kubernetes cluster?

A. kubectl list api-resources  
B. kubectl get apis  
C. kubectl get api-resources  
D. kubectl api-resources  

**Correct Answer:** D. kubectl api-resources

*Source: moabukar/KCNA GitHub*

---

### Q59: Which of these is not a service type in Kubernetes?

A. ClusterIP  
B. NodePort  
C. Ingress  
D. LoadBalancer  

**Correct Answer:** C. Ingress

*Source: moabukar/KCNA GitHub*

---

### Q60: What language is used to specify and create a Kubernetes resource?

A. JavaScript  
B. Python  
C. YAML  
D. JSON  

**Correct Answer:** C. YAML

*Source: moabukar/KCNA GitHub*

---

### Q61: Which of the following is not a required field to create a Kubernetes resource?

A. kind  
B. apiVersion  
C. container  
D. metadata  

**Correct Answer:** C. container

*Source: moabukar/KCNA GitHub*

---

### Q62: You need to temporarily prevent new pods from being scheduled on a node for maintenance. Which command should you use?

A. kubectl taint nodes node1 maintenance=true:NoSchedule  
B. kubectl cordon node1  
C. kubectl drain node1  
D. kubectl delete node node1  

**Correct Answer:** B. kubectl cordon node1

> **Explanation:** kubectl cordon marks a node as unschedulable, preventing new pods from being scheduled while existing pods continue running.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q63: What is the primary purpose of an init container in Kubernetes?

A. To run alongside the main container throughout the pod's lifecycle  
B. To perform setup tasks that must complete before the main container starts  
C. To monitor the health of the main container  
D. To handle network traffic for the main container  

**Correct Answer:** B. To perform setup tasks that must complete before the main container starts

> **Explanation:** Init containers run to completion before the main application containers start. Used for setup tasks like waiting for services, populating volumes, or running initialization scripts.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q64: Which kubectl command creates a deployment named 'web-app' with the nginx image?

A. kubectl run web-app --image=nginx  
B. kubectl create deployment web-app --image=nginx  
C. kubectl deploy web-app --image=nginx  
D. kubectl apply deployment web-app --image=nginx  

**Correct Answer:** B. kubectl create deployment web-app --image=nginx

> **Explanation:** kubectl create deployment is the correct command. Option A creates a pod, not a deployment.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q65: What is the difference between kubectl create and kubectl run?

A. kubectl create creates any resource type; kubectl run creates only pods  
B. kubectl create is deprecated; kubectl run is the new standard  
C. They are identical commands with different syntax  
D. kubectl create is for YAML files only; kubectl run is for command-line creation  

**Correct Answer:** A. kubectl create creates any resource type; kubectl run creates only pods

> **Explanation:** kubectl create is a general command for creating any Kubernetes resource. kubectl run now primarily creates pods.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q66: Which Pod Security Standard provides the most restrictive security policies?

A. Privileged  
B. Baseline  
C. Restricted  
D. Default  

**Correct Answer:** C. Restricted

> **Explanation:** The three Pod Security Standards: Privileged (unrestricted), Baseline (minimal restrictions), Restricted (most restrictive, follows pod hardening best practices).

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q67: You have a database application that requires persistent storage and stable network identity. Which workload type should you use?

A. Deployment  
B. StatefulSet  
C. DaemonSet  
D. Job  

**Correct Answer:** B. StatefulSet

> **Explanation:** Databases require stable network identity, persistent storage, ordered deployment and scaling — all provided by StatefulSets.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q68: What happens to existing pods on a node when you run kubectl cordon node1?

A. All pods are immediately evicted  
B. Existing pods continue running; no new pods can be scheduled  
C. Pods are gracefully terminated  
D. The node is removed from the cluster  

**Correct Answer:** B. Existing pods continue running; no new pods can be scheduled

> **Explanation:** kubectl cordon only affects scheduling of new pods. Existing pods remain running. Use kubectl drain to evict existing pods.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q69: Which command is used to view logs from a specific container in a pod?

A. kubectl describe pod <pod-name>  
B. kubectl get logs <pod-name>  
C. kubectl logs <pod-name>  
D. kubectl inspect <pod-name>  

**Correct Answer:** C. kubectl logs <pod-name>

> **Explanation:** kubectl logs retrieves container logs. Add -c <container-name> for multi-container pods.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q70: What is the purpose of a namespace in Kubernetes?

A. To provide network isolation between pods  
B. To organize and isolate resources within a cluster  
C. To define pod security policies  
D. To manage container images  

**Correct Answer:** B. To organize and isolate resources within a cluster

> **Explanation:** Namespaces provide a way to divide cluster resources between multiple users or projects. They don't provide network isolation by default (Network Policies do that).

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q71: Which component is responsible for scheduling pods to nodes in a Kubernetes cluster?

A. kubelet  
B. kube-proxy  
C. kube-scheduler  
D. controller-manager  

**Correct Answer:** C. kube-scheduler

> **Explanation:** The kube-scheduler watches for newly created pods and assigns them to nodes based on resource requirements, constraints, and policies.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q72: What kubectl command can you use to modify a deployment's replica count?

A. kubectl edit deployment <name>  
B. kubectl patch deployment <name> -p '{"spec":{"replicas":5}}'  
C. kubectl scale deployment <name> --replicas=5  
D. All of the above  

**Correct Answer:** D. All of the above

> **Explanation:** All three methods can modify a deployment's replica count: kubectl edit, kubectl patch, and kubectl scale.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q73: Which kubectl command creates a pod that runs only once and terminates?

A. kubectl create pod <name> --image=<image>  
B. kubectl run <name> --image=<image> --restart=Never  
C. kubectl apply -f pod.yaml --once  
D. kubectl execute <name> --image=<image>  

**Correct Answer:** B. kubectl run <name> --image=<image> --restart=Never

> **Explanation:** The --restart=Never flag creates a pod that won't be restarted after completion, running only once.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q74: What is the default restart policy for pods in Kubernetes?

A. Never  
B. OnFailure  
C. Always  
D. RestartOnError  

**Correct Answer:** C. Always

> **Explanation:** The default restart policy for pods is Always, meaning containers will be restarted regardless of exit status.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q75: Which resource ensures that a specific number of pod replicas are running at all times?

A. Pod  
B. ReplicaSet  
C. Service  
D. ConfigMap  

**Correct Answer:** B. ReplicaSet

> **Explanation:** A ReplicaSet ensures that a specified number of pod replicas are running at any given time. Deployments manage ReplicaSets.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q76: You need to update a deployment's container image. Which command should you use?

A. kubectl set image deployment/<name> <container>=<new-image>  
B. kubectl update deployment/<name> --image=<new-image>  
C. kubectl modify deployment/<name> image=<new-image>  
D. kubectl change deployment/<name> --image=<new-image>  

**Correct Answer:** A. kubectl set image deployment/<name> <container>=<new-image>

> **Explanation:** kubectl set image is the imperative command to update container images. Other commands listed don't exist in kubectl.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q77: What is the purpose of labels in Kubernetes?

A. To provide human-readable names for resources  
B. To organize and select groups of objects  
C. To define resource quotas  
D. To configure network policies  

**Correct Answer:** B. To organize and select groups of objects

> **Explanation:** Labels are key-value pairs attached to objects for organization and selection. They're essential for Services, Deployments, and other controllers.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q78: Which file format is primarily used for Kubernetes resource definitions?

A. JSON only  
B. XML  
C. YAML or JSON  
D. TOML  

**Correct Answer:** C. YAML or JSON

> **Explanation:** Kubernetes accepts both YAML and JSON for resource definitions. YAML is more commonly used because it's more human-readable and supports comments.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q79: What is a pod in Kubernetes?

A. A single container  
B. The smallest deployable unit that can contain one or more containers  
C. A group of nodes  
D. A storage volume  

**Correct Answer:** B. The smallest deployable unit that can contain one or more containers

> **Explanation:** A pod is the smallest and simplest Kubernetes object. It can contain one or more tightly coupled containers that share storage and network resources.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q80: Which kubectl command displays detailed information about a specific resource?

A. kubectl get <resource> <name> -o wide  
B. kubectl inspect <resource> <name>  
C. kubectl describe <resource> <name>  
D. kubectl info <resource> <name>  

**Correct Answer:** C. kubectl describe <resource> <name>

> **Explanation:** kubectl describe provides detailed information about a resource, including events, conditions, and relationships.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q81: What is the purpose of resource requests in Kubernetes?

A. To limit the maximum resource usage of a container  
B. To specify the minimum resources a container needs for scheduling  
C. To monitor resource consumption  
D. To allocate dedicated CPUs to containers  

**Correct Answer:** B. To specify the minimum resources a container needs for scheduling

> **Explanation:** Resource requests tell the scheduler the minimum resources needed to schedule a pod on a node. Limits define the maximum.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q82: Which Service type exposes an application outside the cluster using a cloud provider's load balancer?

A. ClusterIP  
B. NodePort  
C. LoadBalancer  
D. ExternalName  

**Correct Answer:** C. LoadBalancer

> **Explanation:** LoadBalancer service provisions an external load balancer from the cloud provider. ClusterIP is internal only; NodePort exposes a port on each node.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q83: What does kubectl apply -f manifest.yaml do when the resource already exists?

A. Fails with an error  
B. Updates the existing resource with the new configuration  
C. Deletes and recreates the resource  
D. Creates a duplicate resource  

**Correct Answer:** B. Updates the existing resource with the new configuration

> **Explanation:** kubectl apply is idempotent — it creates the resource if it doesn't exist, or updates it if it does. kubectl create fails if the resource already exists.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q84: Which volume type is suitable for sharing files between containers in the same pod?

A. PersistentVolume  
B. hostPath  
C. emptyDir  
D. nfs  

**Correct Answer:** C. emptyDir

> **Explanation:** emptyDir is a temporary volume that exists as long as the pod runs. It's shared between all containers in the pod and deleted when the pod is removed.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q85: Which resource is used to store sensitive information like passwords?

A. ConfigMap  
B. Secret  
C. Volume  
D. Environment variables only  

**Correct Answer:** B. Secret

> **Explanation:** Secrets are designed to store sensitive information like passwords, OAuth tokens, and SSH keys. They can be encrypted at rest with proper configuration.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q86: Which deployment strategy involves running two identical production environments (old and new)?

A. Rolling update  
B. Canary deployment  
C. Blue-green deployment  
D. Recreate  

**Correct Answer:** C. Blue-green deployment

> **Explanation:** Blue-green deployment maintains two identical environments: Blue (current production) and Green (new version). Traffic switches completely from blue to green once validated.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q87: Which kubectl command would you use to create a pod imperatively?

A. kubectl apply -f pod.yaml  
B. kubectl create pod mypod --image=nginx  
C. kubectl run mypod --image=nginx  
D. kubectl generate pod mypod --image=nginx  

**Correct Answer:** C. kubectl run mypod --image=nginx

> **Explanation:** kubectl run is the imperative command to create pods. kubectl apply -f is declarative.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q88: What is the purpose of a readiness probe?

A. To restart unhealthy containers  
B. To determine when a container is ready to accept traffic  
C. To check if a container needs more resources  
D. To monitor container logs  

**Correct Answer:** B. To determine when a container is ready to accept traffic

> **Explanation:** Readiness probes tell Kubernetes when a container is ready to serve requests. Failed readiness probes remove the pod from service endpoints but don't restart the container.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q89: Which Kubernetes object automatically manages the lifecycle of pods in a deployment?

A. Service  
B. ReplicaSet  
C. ConfigMap  
D. Namespace  

**Correct Answer:** B. ReplicaSet

> **Explanation:** Deployments create and manage ReplicaSets, which in turn manage pods. The ReplicaSet ensures the desired number of pod replicas are running.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q90: What is the default namespace in Kubernetes?

A. kube-system  
B. kube-public  
C. default  
D. production  

**Correct Answer:** C. default

> **Explanation:** The default namespace is where resources are created if no namespace is specified. Other system namespaces: kube-system, kube-public, kube-node-lease.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q91: You want to deploy a stateless web application that can be easily scaled. Which workload type should you use?

A. StatefulSet  
B. DaemonSet  
C. Deployment  
D. Job  

**Correct Answer:** C. Deployment

> **Explanation:** Stateless web applications are perfect for Deployments: no persistent data requirements, pods are interchangeable, easy horizontal scaling, rolling updates.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q92: Which command shows the current context of your kubectl configuration?

A. kubectl config view  
B. kubectl config current-context  
C. kubectl context  
D. kubectl get context  

**Correct Answer:** B. kubectl config current-context

> **Explanation:** kubectl config current-context shows the active context. kubectl config view shows the entire config file.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q93: What happens when you delete a pod that is managed by a deployment?

A. The pod is permanently removed  
B. The ReplicaSet creates a new pod to maintain the desired count  
C. The deployment is automatically deleted  
D. All containers in the pod are archived  

**Correct Answer:** B. The ReplicaSet creates a new pod to maintain the desired count

> **Explanation:** When a pod managed by a Deployment is deleted, the ReplicaSet controller immediately creates a replacement pod to maintain the desired replica count.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q94: Which kubectl command can you use to label a pod?

A. kubectl label pod <name> key=value  
B. kubectl tag pod <name> key=value  
C. kubectl annotate pod <name> key=value  
D. kubectl set label pod <name> key=value  

**Correct Answer:** A. kubectl label pod <name> key=value

> **Explanation:** kubectl label adds or modifies labels. Add --overwrite to change existing labels. Remove labels with key- (minus sign). Annotations use kubectl annotate.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q95: What is the purpose of an annotation in Kubernetes?

A. To select groups of objects  
B. To attach non-identifying metadata to objects  
C. To enforce security policies  
D. To define resource requests  

**Correct Answer:** B. To attach non-identifying metadata to objects

> **Explanation:** Annotations store arbitrary metadata that doesn't identify objects (unlike labels). Common uses: build information, tool configuration, contact information. Annotations can't be used in selectors.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q96: Which component stores the cluster state in Kubernetes?

A. API Server  
B. etcd  
C. Controller Manager  
D. kubelet  

**Correct Answer:** B. etcd

> **Explanation:** etcd is a distributed key-value store that holds the entire cluster state. The API server reads from and writes to etcd.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q97: What kubectl command scales a deployment to 5 replicas?

A. kubectl scale deployment myapp --replicas=5  
B. kubectl set replicas deployment myapp 5  
C. kubectl update deployment myapp --replicas=5  
D. kubectl modify deployment myapp replicas=5  

**Correct Answer:** A. kubectl scale deployment myapp --replicas=5

> **Explanation:** kubectl scale is the imperative command for scaling. It updates the replica count in the deployment spec.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q98: Which kubectl command can display resource usage (CPU/memory) for pods?

A. kubectl top pods  
B. kubectl stats pods  
C. kubectl usage pods  
D. kubectl resources pods  

**Correct Answer:** A. kubectl top pods

> **Explanation:** kubectl top shows current resource usage (requires metrics-server). kubectl top pods shows CPU/memory per pod.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q99: Which file is kubectl configuration typically stored in?

A. ~/.kube/config  
B. /etc/kubernetes/config  
C. ~/kubectl.conf  
D. /var/lib/kubelet/config  

**Correct Answer:** A. ~/.kube/config

> **Explanation:** The default kubectl config file is ~/.kube/config. It contains contexts, clusters, and user credentials. Use --kubeconfig or KUBECONFIG env var for different files.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q100: What happens when a startup probe fails?

A. The container is marked unhealthy but continues running  
B. The container is killed and restarted according to restart policy  
C. The pod is deleted immediately  
D. Nothing, it's just logged  

**Correct Answer:** B. The container is killed and restarted according to restart policy

> **Explanation:** Startup probes protect slow-starting containers. If startup probe fails after all retries, the container is killed and restarted. Liveness and readiness probes are disabled until startup succeeds.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q101: Which kubectl command displays events for the cluster?

A. kubectl get events  
B. kubectl logs events  
C. kubectl describe events  
D. kubectl show events  

**Correct Answer:** A. kubectl get events

> **Explanation:** kubectl get events lists cluster events. Add --watch to stream events. Events show pod scheduling, image pulls, errors, and warnings.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q102: Which kubectl command can create resources from a YAML file?

A. kubectl create -f file.yaml  
B. kubectl apply -f file.yaml  
C. Both A and B  
D. kubectl generate -f file.yaml  

**Correct Answer:** C. Both A and B

> **Explanation:** Both work: kubectl create -f (creates resources, fails if they exist) and kubectl apply -f (creates or updates resources declaratively — recommended for GitOps).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q103: Which Pod Security Standard allows unrestricted access and privileges?

A. Baseline  
B. Restricted  
C. Privileged  
D. Permissive  

**Correct Answer:** C. Privileged

> **Explanation:** The Privileged Pod Security Standard is unrestricted, allowing running as root, all capabilities, and host access. Only use for trusted system workloads.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q104: Which resource type ensures that a job runs to completion?

A. Deployment  
B. ReplicaSet  
C. Job  
D. CronJob  

**Correct Answer:** C. Job

> **Explanation:** Jobs create pods that run to completion. They ensure tasks finish successfully: batch processing, data processing, backups. Jobs track successful completions and retry failures.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q105: Which kubectl command exports a resource definition in YAML format?

A. kubectl get <resource> <name> -o yaml  
B. kubectl export <resource> <name> --format=yaml  
C. kubectl describe <resource> <name> --yaml  
D. kubectl show <resource> <name> -o yaml  

**Correct Answer:** A. kubectl get <resource> <name> -o yaml

> **Explanation:** -o yaml outputs in YAML format. Other formats: -o json, -o wide, -o name. Useful for backing up resources or creating templates.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q106: What is the purpose of a service selector?

A. To choose which namespace a service operates in  
B. To identify which pods the service routes traffic to  
C. To select which nodes can run the service  
D. To configure service type  

**Correct Answer:** B. To identify which pods the service routes traffic to

> **Explanation:** Services use selectors to identify target pods. Service routes traffic to pods with matching labels.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q107: Which controller ensures that the desired number of nodes are running in the cluster?

A. ReplicaSet  
B. Deployment  
C. Node Controller  
D. Scheduler  

**Correct Answer:** C. Node Controller

> **Explanation:** The Node Controller is part of the controller-manager. It monitors node health, manages node lifecycle, evicts pods from unhealthy nodes, and updates node status.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q108: Which network policy direction controls traffic leaving pods?

A. Ingress  
B. Egress  
C. Outbound  
D. External  

**Correct Answer:** B. Egress

> **Explanation:** Network Policy directions: Ingress (controls incoming traffic TO pods) and Egress (controls outgoing traffic FROM pods).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q109: Which resource type is best for running a monitoring agent on every node?

A. Deployment  
B. StatefulSet  
C. DaemonSet  
D. ReplicaSet  

**Correct Answer:** C. DaemonSet

> **Explanation:** DaemonSets run one pod per node, perfect for: node monitoring agents (Prometheus Node Exporter), log collectors (Fluentd, Filebeat), storage daemons, network plugins.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q110: How do you dedicate a Kubernetes node to a specific workload type?

A. Assign all pods a higher priority  
B. Use taints on the node and tolerations on the target pods  
C. Use node labels only  
D. Use NetworkPolicy  

**Correct Answer:** B. Use taints on the node and tolerations on the target pods

> **Explanation:** Dedicated node pattern: taint the node with kubectl taint nodes gpu-node gpu=true:NoSchedule, then add matching tolerations to GPU pods. Also add nodeSelector for additional targeting.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q111: Which workload type maintains the order of pod creation and deletion?

A. Deployment  
B. StatefulSet  
C. DaemonSet  
D. ReplicaSet  

**Correct Answer:** B. StatefulSet

> **Explanation:** StatefulSets guarantee ordering: Creation (sequential: pod-0 first), Deletion (reverse sequential: pod-N first), Updates (ordered rolling updates). Deployments create/delete pods in any order.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q112: What deployment strategy gradually shifts traffic from old to new versions?

A. Blue-green deployment  
B. Canary deployment  
C. Rolling update  
D. Recreate  

**Correct Answer:** B. Canary deployment

> **Explanation:** Deployment strategies: Rolling update (gradual replacement, default), Blue-green (complete switch between environments), Canary (gradual traffic shift: 10% → 50% → 100%), Recreate (delete all, then create new).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q113: You need to deploy a message queue (like Kafka) that requires stable network identity for cluster formation. Which workload type should you use?

A. Deployment  
B. DaemonSet  
C. StatefulSet  
D. Job  

**Correct Answer:** C. StatefulSet

> **Explanation:** Message queues like Kafka require: stable network identity for cluster formation, persistent storage for message retention, ordered deployment for proper initialization. StatefulSet provides all requirements.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

# Container Orchestration
**Exam Weight: 28%** | **Questions in this section: 78**

### Q114: What is the purpose of a NetworkPolicy in Kubernetes?

A. To configure DNS resolution  
B. To control network traffic between pods  
C. To manage external load balancers  
D. To define service endpoints  

**Correct Answer:** B. To control network traffic between pods

> **Explanation:** NetworkPolicies restrict pod-to-pod and pod-to-external network traffic. By default all traffic is allowed; a NetworkPolicy can selectively allow or deny ingress and egress.

*Source: KCNA Supplemental Bank*

---

### Q115: What happens if no NetworkPolicy selects a pod?

A. All traffic is denied  
B. All traffic is allowed (default open)  
C. Only DNS traffic is allowed  
D. The pod is isolated  

**Correct Answer:** B. All traffic is allowed (default open)

> **Explanation:** By default, if no NetworkPolicy selects a pod, all ingress and egress traffic is allowed. Policies are additive — they only ADD restrictions.

*Source: KCNA Supplemental Bank*

---

### Q116: What is the Vertical Pod Autoscaler (VPA)?

A. Scales the number of pod replicas  
B. Automatically adjusts CPU/memory requests and limits for containers  
C. Manages cluster node scaling  
D. Controls storage autoscaling  

**Correct Answer:** B. Automatically adjusts CPU/memory requests and limits for containers

> **Explanation:** VPA analyzes resource usage and automatically adjusts CPU/memory requests/limits. Unlike HPA (which scales replicas), VPA scales resource allocations per container.

*Source: KCNA Supplemental Bank*

---

### Q117: What does the Cluster Autoscaler do?

A. Scales pod replicas  
B. Adjusts the number of nodes in the cluster based on pending pods  
C. Resizes container memory limits  
D. Manages storage provisioning  

**Correct Answer:** B. Adjusts the number of nodes in the cluster based on pending pods

> **Explanation:** The Cluster Autoscaler adds nodes when pods can't be scheduled due to resource constraints and removes underutilized nodes. Works with cloud provider node groups.

*Source: KCNA Supplemental Bank*

---

### Q118: What is a PersistentVolume (PV) access mode ReadWriteOnce?

A. The volume can be mounted read-write by many nodes  
B. The volume can be mounted read-only by many nodes  
C. The volume can be mounted as read-write by a single node  
D. The volume cannot be mounted remotely  

**Correct Answer:** C. The volume can be mounted as read-write by a single node

> **Explanation:** PV access modes: ReadWriteOnce (RWO) — single node read-write; ReadOnlyMany (ROX) — many nodes read-only; ReadWriteMany (RWX) — many nodes read-write.

*Source: KCNA Supplemental Bank*

---

### Q119: What is a StorageClass in Kubernetes?

A. A classification of pod security levels  
B. A way to define different types of storage with different properties  
C. A namespace for storage resources  
D. A container for storing secrets  

**Correct Answer:** B. A way to define different types of storage with different properties

> **Explanation:** StorageClasses allow administrators to define different storage tiers (SSD, HDD, NFS). PVCs can request a specific StorageClass; dynamic provisioning creates PVs automatically.

*Source: KCNA Supplemental Bank*

---

### Q120: What is dynamic volume provisioning in Kubernetes?

A. Manually creating PVs for each PVC  
B. Automatically provisioning storage when a PVC is created  
C. Resizing volumes on demand  
D. Migrating volumes between nodes  

**Correct Answer:** B. Automatically provisioning storage when a PVC is created

> **Explanation:** Dynamic provisioning eliminates the need for administrators to pre-provision storage. When a PVC references a StorageClass, a PV is automatically created by the storage provider.

*Source: KCNA Supplemental Bank*

---

### Q121: Which CNI plugin is a common choice for Kubernetes network policy enforcement?

A. flannel  
B. Calico  
C. weave  
D. bridge  

**Correct Answer:** B. Calico

> **Explanation:** Calico is widely used for both networking and network policy enforcement. Other CNI options (Flannel, Weave) may not support NetworkPolicy natively. Calico uses BGP and iptables/eBPF.

*Source: KCNA Supplemental Bank*

---

### Q122: What is the role of kube-proxy?

A. To proxy requests to the Kubernetes API  
B. To implement Services by managing iptables or IPVS rules on each node  
C. To forward logs from pods  
D. To proxy container registry access  

**Correct Answer:** B. To implement Services by managing iptables or IPVS rules on each node

> **Explanation:** kube-proxy maintains network rules (iptables or IPVS) on each node that implement Service load balancing and virtual IP routing.

*Source: KCNA Supplemental Bank*

---

### Q123: What is the Container Runtime Interface (CRI)?

A. A GUI for managing containers  
B. A plugin interface that allows Kubernetes to use different container runtimes  
C. A command-line tool for building images  
D. A network protocol for container communication  

**Correct Answer:** B. A plugin interface that allows Kubernetes to use different container runtimes

> **Explanation:** CRI is a plugin interface introduced in Kubernetes 1.5 that standardizes how the kubelet communicates with container runtimes. This enables containerd, CRI-O, and others to work with Kubernetes.

*Source: KCNA Supplemental Bank*

---

### Q124: What is the Container Storage Interface (CSI)?

A. A container security inspection tool  
B. A standard interface for attaching storage to containers  
C. A container image specification  
D. A storage encryption protocol  

**Correct Answer:** B. A standard interface for attaching storage to containers

> **Explanation:** CSI standardizes how storage vendors integrate with Kubernetes (and other orchestrators). It replaced in-tree volume plugins, allowing storage drivers to be developed out-of-tree.

*Source: KCNA Supplemental Bank*

---

### Q125: Which Kubernetes object runs a pod on every node (or selected nodes)?

A. ReplicaSet  
B. Deployment  
C. DaemonSet  
D. StatefulSet  

**Correct Answer:** C. DaemonSet

> **Explanation:** DaemonSets ensure a pod copy runs on every node (or a selected subset). Common use cases: log collectors (Fluentd), monitoring agents (node-exporter), network plugins.

*Source: KCNA Supplemental Bank*

---

### Q126: What is a headless service in Kubernetes?

A. A service with no selector  
B. A service with ClusterIP set to None, providing direct pod DNS records  
C. A service that does not allow external traffic  
D. A service with no endpoints  

**Correct Answer:** B. A service with ClusterIP set to None, providing direct pod DNS records

> **Explanation:** Setting clusterIP: None creates a headless service. DNS returns individual pod IPs instead of a single virtual IP. Required by StatefulSets for stable network identity.

*Source: KCNA Supplemental Bank*

---

### Q127: What is the difference between a Deployment and a StatefulSet update strategy?

A. Deployments do not support rolling updates  
B. StatefulSets update pods in reverse ordinal order; Deployments update in any order  
C. StatefulSets cannot be updated  
D. They use the same update strategy  

**Correct Answer:** B. StatefulSets update pods in reverse ordinal order; Deployments update in any order

> **Explanation:** StatefulSet rolling updates proceed from the highest ordinal to the lowest (pod-N first) to maintain cluster integrity. Deployments replace pods in any order.

*Source: KCNA Supplemental Bank*

---

### Q128: What RBAC resource binds a ClusterRole to a user at the namespace level?

A. RoleBinding  
B. ClusterRoleBinding  
C. ServiceAccountBinding  
D. NamespaceRole  

**Correct Answer:** A. RoleBinding

> **Explanation:** A RoleBinding can bind either a Role or a ClusterRole to subjects within a specific namespace. A ClusterRoleBinding grants the ClusterRole permissions across the entire cluster.

*Source: KCNA Supplemental Bank*

---

### Q129: What is the purpose of an admission controller in Kubernetes?

A. To authenticate users  
B. To intercept and process API requests before they are persisted  
C. To schedule pods  
D. To manage network rules  

**Correct Answer:** B. To intercept and process API requests before they are persisted

> **Explanation:** Admission controllers intercept API requests after authentication and authorization but before object persistence. They can validate (mutating) or reject (validating) requests. Examples: LimitRanger, ResourceQuota, PodSecurity.

*Source: KCNA Supplemental Bank*

---

### Q130: Which command creates a secret from a literal value?

A. kubectl create secret generic my-secret --from-literal=key=value  
B. kubectl apply secret my-secret key=value  
C. kubectl secret create my-secret --key=value  
D. kubectl generate secret my-secret key=value  

**Correct Answer:** A. kubectl create secret generic my-secret --from-literal=key=value

> **Explanation:** kubectl create secret generic creates an Opaque secret. --from-literal=key=value sets individual key-value pairs. --from-file reads from a file.

*Source: KCNA Supplemental Bank*

---

### Q131: What is pod affinity used for?

A. To repel pods from nodes  
B. To co-locate pods on the same node or zone as other pods  
C. To assign pods to specific nodes  
D. To limit pod resource usage  

**Correct Answer:** B. To co-locate pods on the same node or zone as other pods

> **Explanation:** Pod affinity attracts pods to nodes that already run pods with matching labels. Pod anti-affinity spreads pods away from each other. Useful for performance (co-location) or HA (spreading).

*Source: KCNA Supplemental Bank*

---

### Q132: What is the purpose of a PodDisruptionBudget (PDB)?

A. To set resource budgets for pods  
B. To ensure a minimum number of pods remain available during voluntary disruptions  
C. To limit pod network traffic  
D. To control pod startup time  

**Correct Answer:** B. To ensure a minimum number of pods remain available during voluntary disruptions

> **Explanation:** PDBs protect applications from voluntary disruptions (node drains, cluster upgrades) by specifying a minimum number (minAvailable) or maximum number (maxUnavailable) of pods that can be disrupted.

*Source: KCNA Supplemental Bank*

---

### Q133: What is the difference between a ReplicaSet and a Deployment?

A. ReplicaSets support rolling updates; Deployments do not  
B. Deployments manage ReplicaSets and provide rolling update/rollback; ReplicaSets only manage pod count  
C. They are identical resources  
D. Deployments are for stateful apps; ReplicaSets are for stateless  

**Correct Answer:** B. Deployments manage ReplicaSets and provide rolling update/rollback; ReplicaSets only manage pod count

> **Explanation:** Deployments are higher-level controllers that manage ReplicaSets. They add rolling update strategies, rollback history, and pause/resume capabilities on top of the ReplicaSet's pod count management.

*Source: KCNA Supplemental Bank*

---

### Q134: What are init containers used for?

A. Monitoring container startup  
B. Running setup tasks that must complete before the main container starts  
C. Running alongside the main container  
D. Handling container shutdown  

**Correct Answer:** B. Running setup tasks that must complete before the main container starts

> **Explanation:** Init containers run sequentially to completion before the main container starts. Use cases: wait for a database, clone a Git repo, render configuration files.

*Source: KCNA Supplemental Bank*

---

### Q135: What is the purpose of a Kubernetes Job's completions field?

A. Sets the maximum time for the job  
B. Specifies how many pods must successfully complete  
C. Sets the number of parallel pods  
D. Defines the job's restart policy  

**Correct Answer:** B. Specifies how many pods must successfully complete

> **Explanation:** The completions field specifies the desired number of successful pod completions. The parallelism field sets how many pods run simultaneously.

*Source: KCNA Supplemental Bank*

---

### Q136: What is image digest vs. image tag?

A. They are the same thing  
B. A tag is a mutable label; a digest is an immutable hash of the image content  
C. Digests are for private registries; tags are for public ones  
D. Tags are numeric; digests are alphanumeric  

**Correct Answer:** B. A tag is a mutable label; a digest is an immutable hash of the image content

> **Explanation:** Image tags (e.g., nginx:1.25) can be reassigned to different images. Digests (sha256:abc...) are cryptographic hashes tied to exact image content, ensuring reproducibility.

*Source: KCNA Supplemental Bank*

---

### Q137: What is a CRD (Custom Resource Definition)?

A. A custom Docker image format  
B. An extension that adds custom resource types to the Kubernetes API  
C. A custom networking driver  
D. A custom resource quota  

**Correct Answer:** B. An extension that adds custom resource types to the Kubernetes API

> **Explanation:** CRDs extend the Kubernetes API with new resource types. Operators use CRDs to define domain-specific resources (e.g., PostgresCluster, KafkaTopic) managed by custom controllers.

*Source: KCNA Supplemental Bank*

---

### Q138: What is a Kubernetes Operator?

A. A human who operates the cluster  
B. A software extension that uses CRDs and controllers to manage complex applications  
C. A command-line tool for cluster management  
D. A monitoring component  

**Correct Answer:** B. A software extension that uses CRDs and controllers to manage complex applications

> **Explanation:** Operators encode operational knowledge. They watch CRD instances and automate complex tasks like provisioning, scaling, backup, and failover for stateful applications (databases, message queues).

*Source: KCNA Supplemental Bank*

---

### Q139: What is the purpose of node affinity?

A. To attach nodes to specific pods  
B. To attract or repel pods from nodes based on node labels  
C. To configure node networking  
D. To set node resource limits  

**Correct Answer:** B. To attract or repel pods from nodes based on node labels

> **Explanation:** Node affinity (requiredDuringSchedulingIgnoredDuringExecution or preferredDuringScheduling) provides rich expressions for node selection, more flexible than nodeSelector.

*Source: KCNA Supplemental Bank*

---

### Q140: What is inter-pod anti-affinity used for?

A. To prevent pods from communicating  
B. To spread pods across different nodes/zones for high availability  
C. To limit pod-to-pod network traffic  
D. To isolate pods in separate namespaces  

**Correct Answer:** B. To spread pods across different nodes/zones for high availability

> **Explanation:** Pod anti-affinity prevents pods with matching labels from co-locating on the same node or zone. Used for HA: ensures replicas of a deployment run on different nodes.

*Source: KCNA Supplemental Bank*

---

### Q141: What is a Kubernetes Endpoint?

A. The API server URL  
B. An object that tracks the pod IPs backing a service  
C. An external URL for a service  
D. A node's network interface  

**Correct Answer:** B. An object that tracks the pod IPs backing a service

> **Explanation:** Endpoints (or EndpointSlices) store the IP:port pairs of pods matching a Service's selector. kube-proxy uses them to route traffic to healthy pods.

*Source: KCNA Supplemental Bank*

---

### Q142: What happens to a StatefulSet pod's storage when the pod is deleted and recreated?

A. The data is lost  
B. A new empty PVC is created  
C. The same PVC is reattached to the new pod  
D. The data is moved to a backup volume  

**Correct Answer:** C. The same PVC is reattached to the new pod

> **Explanation:** StatefulSets maintain PVC identity. When a pod is recreated, it reattaches to its original PVC (pod-0 gets volumeClaimTemplate-pod-0, etc.), preserving its data.

*Source: KCNA Supplemental Bank*

---

### Q143: What is an ExternalName service type?

A. A service that provides external load balancing  
B. A service that maps to an external DNS name via CNAME  
C. A service accessible only outside the cluster  
D. A service with a static external IP  

**Correct Answer:** B. A service that maps to an external DNS name via CNAME

> **Explanation:** ExternalName services create a DNS alias within the cluster that resolves to an external FQDN (e.g., database.example.com). No proxying occurs; it's a pure DNS CNAME.

*Source: KCNA Supplemental Bank*

---

### Q144: What is a container probe of type httpGet?

A. Probes the container's stdin  
B. Performs an HTTP GET request to the container and considers it healthy if response is 2xx/3xx  
C. Checks a file path exists  
D. Tests TCP connection to a port  

**Correct Answer:** B. Performs an HTTP GET request to the container and considers it healthy if response is 2xx/3xx

> **Explanation:** httpGet probes send an HTTP GET to a specified path and port. A 200-399 response is success. Other probe types: tcpSocket (TCP connection check) and exec (run a command).

*Source: KCNA Supplemental Bank*

---

### Q145: What is the purpose of securityContext in a pod spec?

A. To define network security policies  
B. To set security settings (run as user, capabilities, read-only filesystem) for containers  
C. To configure TLS for the pod  
D. To define RBAC policies for the pod  

**Correct Answer:** B. To set security settings (run as user, capabilities, read-only filesystem) for containers

> **Explanation:** securityContext configures security settings at the pod or container level: runAsUser, runAsNonRoot, readOnlyRootFilesystem, allowPrivilegeEscalation, capabilities (add/drop).

*Source: KCNA Supplemental Bank*

---

### Q146: What is the difference between requests and limits for resources?

A. Requests are for memory; limits are for CPU  
B. Requests are minimum resources for scheduling; limits are the maximum a container can use  
C. Requests are enforced; limits are advisory  
D. They are identical  

**Correct Answer:** B. Requests are minimum resources for scheduling; limits are the maximum a container can use

> **Explanation:** Resource requests guarantee the container will have that amount of resources. Limits cap consumption. Exceeding memory limit = OOMKill. Exceeding CPU limit = throttling.

*Source: KCNA Supplemental Bank*

---

### Q147: What does OOMKilled mean in Kubernetes?

A. A pod was manually killed by an operator  
B. A container was killed because it exceeded its memory limit  
C. A pod failed a health check  
D. A node ran out of disk space  

**Correct Answer:** B. A container was killed because it exceeded its memory limit

> **Explanation:** OOMKilled (Out Of Memory Killed) means the container consumed more memory than its limit and was terminated by the Linux kernel's OOM killer. Fix by increasing memory limits or reducing consumption.

*Source: KCNA Supplemental Bank*

---

### Q148: What is the purpose of a NetworkPolicy's podSelector?

A. To select which nodes the policy applies to  
B. To select which pods the NetworkPolicy applies to within the namespace  
C. To select which services are affected  
D. To select which namespaces are affected  

**Correct Answer:** B. To select which pods the NetworkPolicy applies to within the namespace

> **Explanation:** podSelector in a NetworkPolicy selects the target pods within the same namespace. An empty podSelector ({}) selects all pods in the namespace.

*Source: KCNA Supplemental Bank*

---

### Q149: What is a Kubernetes Operator pattern?

A. A human operator managing Kubernetes  
B. Software that uses CRDs and controllers to encode operational knowledge for managing complex applications  
C. A plugin for extending kubectl  
D. A monitoring framework  

**Correct Answer:** B. Software that uses CRDs and controllers to encode operational knowledge for managing complex applications

> **Explanation:** Operators automate Day-2 operations (provisioning, backup, failover, upgrades) for complex stateful applications using custom controllers that respond to CRD events.

*Source: KCNA Supplemental Bank*

---

### Q150: What is the purpose of ResourceVersion in Kubernetes objects?

A. The Kubernetes API version  
B. An optimistic concurrency control token that changes when an object is modified  
C. The application version  
D. The Helm chart version  

**Correct Answer:** B. An optimistic concurrency control token that changes when an object is modified

> **Explanation:** ResourceVersion is used for optimistic locking. Watch operations use it to receive only changes after a specific version. Update operations fail if the submitted ResourceVersion doesn't match, preventing lost updates.

*Source: KCNA Supplemental Bank*

---

### Q151: What are Kubernetes taints used for?

A. To label nodes with metadata  
B. To repel pods from nodes unless they have a matching toleration  
C. To add security labels to containers  
D. To mark pods for deletion  

**Correct Answer:** B. To repel pods from nodes unless they have a matching toleration

> **Explanation:** Taints allow nodes to repel pods. Common uses: dedicated nodes for specific workloads, nodes with special hardware (GPUs), nodes under maintenance.

*Source: KCNA Supplemental Bank*

---

### Q152: What does the kubectl rollout pause command do?

A. Temporarily stops the API server  
B. Pauses a Deployment rollout so changes accumulate before continuing  
C. Pauses all pods on a node  
D. Freezes etcd  

**Correct Answer:** B. Pauses a Deployment rollout so changes accumulate before continuing

> **Explanation:** kubectl rollout pause deployment/<name> pauses an ongoing rollout. You can make multiple changes and then kubectl rollout resume to apply them all as a single rollout.

*Source: KCNA Supplemental Bank*

---

### Q153: What is topology spread constraint?

A. A network bandwidth limit  
B. A way to control how pods are spread across cluster topology domains (zones, nodes)  
C. A storage topology definition  
D. A CPU pinning configuration  

**Correct Answer:** B. A way to control how pods are spread across cluster topology domains (zones, nodes)

> **Explanation:** topologySpreadConstraints distribute pods evenly across failure domains (nodes, zones, regions). More flexible and expressive than pod anti-affinity for ensuring high availability.

*Source: KCNA Supplemental Bank*

---

### Q154: What is the difference between a volume and a PersistentVolume?

A. They are the same thing  
B. A volume is pod-scoped and temporary; a PersistentVolume has an independent lifecycle  
C. Volumes are for containers; PVs are for nodes  
D. PVs are only for cloud storage  

**Correct Answer:** B. A volume is pod-scoped and temporary; a PersistentVolume has an independent lifecycle

> **Explanation:** Pod volumes (emptyDir, configMap, secret) are tied to the pod's lifecycle. PersistentVolumes exist independently of pods and can outlive them, preserving data across pod restarts and rescheduling.

*Source: KCNA Supplemental Bank*

---

### Q155: What is the Kubernetes garbage collector?

A. A tool that deletes old container images  
B. A controller that deletes objects owned by objects that no longer exist  
C. A storage cleanup daemon  
D. A log rotation controller  

**Correct Answer:** B. A controller that deletes objects owned by objects that no longer exist

> **Explanation:** The garbage collector uses ownership references (ownerReferences) to delete objects (e.g., ReplicaSets, Pods) when their owner (e.g., Deployment) is deleted. This is cascade deletion.

*Source: KCNA Supplemental Bank*

---

### Q156: What is the purpose of a finalizer in Kubernetes object deletion?

A. To speed up deletion  
B. To allow controllers to perform cleanup before the object is permanently removed  
C. To notify external systems of deletion  
D. To prevent accidental deletion by users  

**Correct Answer:** B. To allow controllers to perform cleanup before the object is permanently removed

> **Explanation:** When an object with finalizers is deleted, Kubernetes only removes the finalizers (allowing cleanup) and then the object itself once all finalizers are removed.

*Source: KCNA Supplemental Bank*

---

### Q157: What is IPVS mode for kube-proxy?

A. A deprecated networking mode  
B. IP Virtual Server mode providing better performance than iptables for large clusters  
C. An IPv6 networking mode  
D. A mode for virtual private servers  

**Correct Answer:** B. IP Virtual Server mode providing better performance than iptables for large clusters

> **Explanation:** IPVS mode uses the Linux kernel's IP Virtual Server for Service load balancing. It offers O(1) rule lookup (vs. O(n) for iptables), better performance at scale, and more load balancing algorithms.

*Source: KCNA Supplemental Bank*

---

### Q158: What is a Kubernetes EndpointSlice?

A. A subset of a node's network interface  
B. A scalable mechanism for tracking network endpoints backing a service  
C. A slice of a storage volume  
D. A portion of the cluster's IP range  

**Correct Answer:** B. A scalable mechanism for tracking network endpoints backing a service

> **Explanation:** EndpointSlices (introduced in Kubernetes 1.17, default in 1.21) replace Endpoints for large services. Each slice holds up to 100 endpoints, reducing API server load and improving scalability.

*Source: KCNA Supplemental Bank*

---

### Q159: What is the most common autoscaling method in the world of cloud-native?

A. Horizontal Scaling  
B. Upward Scaling  
C. Vertical Scaling  
D. Downward Scaling  

**Correct Answer:** A. Horizontal Scaling

*Source: moabukar/KCNA GitHub*

---

### Q160: The Open Container Initiative (OCI) provides container standards for?

A. Runtime, Image, Distribution  
B. Image, Build, Distributions  
C. Container, Image, Build  
D. Container, image distribution  

**Correct Answer:** A. Runtime, Image, Distribution

*Source: moabukar/KCNA GitHub*

---

### Q161: What are the main part of a Service Mesh?

A. Master plane and worker node  
B. Kube-scheduler and controller manager  
C. Data plane and Control plane  
D. Discovery plane and date plane  

**Correct Answer:** C. Data plane and Control plane

*Source: moabukar/KCNA GitHub*

---

### Q162: Which of the following container runtime is marked as deprecated by Kubernetes?

A. gVisor  
B. Docker  
C. containerd  
D. CRI-O  

**Correct Answer:** B. Docker

*Source: moabukar/KCNA GitHub*

---

### Q163: Which network policy type controls incoming traffic to pods?

A. Egress  
B. Ingress  
C. Both A and B  
D. Route  

**Correct Answer:** B. Ingress

> **Explanation:** Network Policies have two types: Ingress (controls incoming traffic TO pods) and Egress (controls outgoing traffic FROM pods). A policy can define both.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q164: What is the purpose of a sidecar container?

A. To replace the main container when it fails  
B. To extend or enhance the functionality of the main container  
C. To schedule the main container  
D. To monitor node health  

**Correct Answer:** B. To extend or enhance the functionality of the main container

> **Explanation:** Sidecar containers run alongside the main container in the same pod, sharing network and storage. Common uses: logging, monitoring, proxies, service mesh.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q165: What does HPA (Horizontal Pod Autoscaler) scale based on?

A. Node capacity only  
B. CPU utilization, memory, or custom metrics  
C. Network traffic only  
D. Storage usage  

**Correct Answer:** B. CPU utilization, memory, or custom metrics

> **Explanation:** HPA can scale based on CPU utilization, memory utilization, custom metrics (from applications or external systems), or multiple metrics simultaneously.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q166: Can HPA be used with a DaemonSet?

A. Yes, it's recommended  
B. No, because DaemonSets run one pod per node by design  
C. Yes, but only for CPU metrics  
D. No, DaemonSets don't support scaling  

**Correct Answer:** B. No, because DaemonSets run one pod per node by design

> **Explanation:** DaemonSets maintain one pod per node. Horizontal scaling doesn't make sense for DaemonSets.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q167: How are Secrets stored in Kubernetes by default?

A. Encrypted at rest automatically  
B. Base64 encoded (not encrypted)  
C. Plain text  
D. Hashed with SHA-256  

**Correct Answer:** B. Base64 encoded (not encrypted)

> **Explanation:** By default, Secrets are only base64 encoded, NOT encrypted. Enable encryption at rest in API server configuration for true security.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q168: You want to ensure that a specific pod only runs on nodes with GPU hardware. What should you use?

A. Pod affinity  
B. Node selector or node affinity  
C. DaemonSet  
D. Taints only  

**Correct Answer:** B. Node selector or node affinity

> **Explanation:** Use nodeSelectors (simple label matching) or node affinity (more expressive rules) to target specific hardware.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q169: What is the correct taint effect to prevent new pods from scheduling but allow existing pods to continue running?

A. NoExecute  
B. NoSchedule  
C. PreferNoSchedule  
D. PreventSchedule  

**Correct Answer:** B. NoSchedule

> **Explanation:** NoSchedule prevents new pods from scheduling; existing pods stay. PreferNoSchedule is the soft version. NoExecute evicts existing pods.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q170: Which of the following can trigger a pod eviction?

A. Node running out of resources  
B. Taint with NoExecute effect  
C. kubectl drain command  
D. All of the above  

**Correct Answer:** D. All of the above

> **Explanation:** Pods can be evicted by node resource pressure, taints with NoExecute effect, kubectl drain command, or API-initiated eviction.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q171: What is the primary purpose of a Service Account in Kubernetes?

A. To allow users to access the cluster  
B. To provide an identity for pods to interact with the Kubernetes API  
C. To manage node authentication  
D. To store user passwords  

**Correct Answer:** B. To provide an identity for pods to interact with the Kubernetes API

> **Explanation:** Service Accounts provide an identity for processes running in pods, allowing them to authenticate with the API server.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q172: Which workload type is best for running a web application that sends requests to other microservices?

A. StatefulSet  
B. DaemonSet  
C. Deployment  
D. Job  

**Correct Answer:** C. Deployment

> **Explanation:** Web applications that proxy or send traffic are stateless. Deployments are perfect for stateless applications that can be scaled horizontally.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

---

### Q173: What is the primary difference between kubectl cordon and kubectl taint?

A. Cordon is for permanent node removal; taint is temporary  
B. Cordon marks node unschedulable; taint provides granular control with tolerations  
C. Cordon evicts pods; taint prevents scheduling  
D. They are identical in functionality  

**Correct Answer:** B. Cordon marks node unschedulable; taint provides granular control with tolerations

> **Explanation:** kubectl cordon: Simple, marks node unschedulable. kubectl taint: More flexible, requires pod tolerations, allows dedicated nodes for specific workloads.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q174: What is the purpose of a toleration in Kubernetes?

A. To prevent pods from being scheduled  
B. To allow pods to be scheduled on nodes with matching taints  
C. To increase pod priority  
D. To define resource limits  

**Correct Answer:** B. To allow pods to be scheduled on nodes with matching taints

> **Explanation:** Tolerations allow pods to be scheduled on tainted nodes. A pod must have a toleration matching a node's taint to be scheduled there.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q175: What is the purpose of a PersistentVolumeClaim (PVC)?

A. To create a new storage volume on a node  
B. To request storage resources from a PersistentVolume  
C. To delete unused volumes  
D. To configure network storage  

**Correct Answer:** B. To request storage resources from a PersistentVolume

> **Explanation:** PVCs request storage. Workflow: Admin creates PV, user creates PVC requesting size and access mode, Kubernetes binds PVC to suitable PV, pod references PVC.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q176: What is the primary function of kube-proxy?

A. To schedule pods  
B. To manage network rules for pod communication  
C. To store cluster configuration  
D. To run containers  

**Correct Answer:** B. To manage network rules for pod communication

> **Explanation:** kube-proxy runs on each node and manages network rules (iptables/IPVS). It enables Service IP to pod IP mapping, load balancing across pods, and ClusterIP implementation.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q177: What command would you use to drain a node for maintenance, ignoring DaemonSet pods?

A. kubectl drain <node> --force  
B. kubectl drain <node> --ignore-daemonsets  
C. kubectl evict <node> --all  
D. kubectl cordon <node> --evict  

**Correct Answer:** B. kubectl drain <node> --ignore-daemonsets

> **Explanation:** kubectl drain evicts pods and cordons the node. --ignore-daemonsets is required because DaemonSet pods can't be drained. Use --force for pods not managed by controllers.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q178: What is the difference between a Job and a CronJob?

A. Jobs run continuously; CronJobs run once  
B. Jobs run once; CronJobs run on a schedule  
C. Jobs are for batch processing; CronJobs are for web services  
D. There is no difference  

**Correct Answer:** B. Jobs run once; CronJobs run on a schedule

> **Explanation:** Job: Runs once, ensures completion. CronJob: Creates Jobs on a schedule (cron format). CronJobs are for recurring tasks like backups, reports, cleanup.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q179: When should you use a StatefulSet instead of a Deployment?

A. When you need more replicas  
B. When you need stable network identifiers and persistent storage  
C. When you want faster deployments  
D. When you don't need rolling updates  

**Correct Answer:** B. When you need stable network identifiers and persistent storage

> **Explanation:** Use StatefulSet when applications require stable, unique network identities, persistent storage per pod, ordered deployment and scaling, ordered updates and deletions. Examples: databases, message queues.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q180: What is the correct order of pod termination in a StatefulSet with 3 replicas (pod-0, pod-1, pod-2)?

A. pod-0, pod-1, pod-2  
B. pod-2, pod-1, pod-0  
C. Random order  
D. All terminate simultaneously  

**Correct Answer:** B. pod-2, pod-1, pod-0

> **Explanation:** StatefulSets terminate pods in reverse order of their ordinals. Creation: pod-0 → pod-1 → pod-2. Deletion: pod-2 → pod-1 → pod-0.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q181: Which volume type persists data beyond the pod's lifecycle?

A. emptyDir  
B. PersistentVolume  
C. configMap  
D. secret  

**Correct Answer:** B. PersistentVolume

> **Explanation:** PersistentVolumes provide durable storage that persists beyond pod lifecycle. emptyDir is deleted when the pod is removed.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q182: What is a sidecar container pattern used for?

A. Replacing the main container  
B. Enhancing the main container with additional functionality (logging, monitoring, etc.)  
C. Scheduling the main container  
D. Storing backup data  

**Correct Answer:** B. Enhancing the main container with additional functionality (logging, monitoring, etc.)

> **Explanation:** Sidecar pattern uses: log aggregators, service mesh proxies (Envoy, Linkerd), configuration reloaders, monitoring agents. Sidecars run alongside and enhance the main container.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q183: What is the purpose of a hostPath volume?

A. To mount a file or directory from the host node into a pod  
B. To create network storage  
C. To share data between pods  
D. To store secrets  

**Correct Answer:** A. To mount a file or directory from the host node into a pod

> **Explanation:** hostPath volumes mount a file or directory from the node's filesystem. Security risk: pods can access host filesystem. Avoid in multi-tenant clusters.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q184: Which container runtime is NOT CRI-compliant?

A. containerd  
B. CRI-O  
C. rkt (unmaintained)  
D. Docker Engine (without dockershim)  

**Correct Answer:** D. Docker Engine (without dockershim)

> **Explanation:** CRI-compliant runtimes: containerd (most common), CRI-O. Docker Engine requires dockershim (deprecated in K8s 1.20, removed in 1.24).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q185: What metrics can HPA use for autoscaling?

A. CPU and memory only  
B. CPU, memory, and custom metrics  
C. Network traffic only  
D. Disk I/O only  

**Correct Answer:** B. CPU, memory, and custom metrics

> **Explanation:** HPA supports resource metrics (CPU, memory), custom metrics (application-specific via custom metrics API), and external metrics (cloud provider metrics).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q186: What is the primary task of the Kubernetes scheduler?

A. To monitor pod health  
B. To assign pods to nodes based on resource requirements and constraints  
C. To manage container lifecycle  
D. To handle network routing  

**Correct Answer:** B. To assign pods to nodes based on resource requirements and constraints

> **Explanation:** Scheduler responsibilities: filter nodes that meet pod requirements, score nodes, select best node. Consider: resources, taints/tolerations, affinity, topology. Does NOT monitor health — that's kubelet's job.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q187: How should you encrypt Secrets at rest in Kubernetes?

A. Secrets are automatically encrypted  
B. Enable encryption in the API server configuration  
C. Use base64 encoding  
D. Store them in ConfigMaps instead  

**Correct Answer:** B. Enable encryption in the API server configuration

> **Explanation:** Secrets are base64 encoded by default (NOT encrypted). To encrypt: create encryption configuration, configure API server with --encryption-provider-config, restart API server.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q188: What is the default encoding method for Kubernetes Secrets?

A. AES-256 encryption  
B. Base64 encoding (not encrypted)  
C. SHA-256 hashing  
D. Plain text  

**Correct Answer:** B. Base64 encoding (not encrypted)

> **Explanation:** Important distinction: Encoding (base64) transforms data, easily reversible, NOT security. Encryption uses keys, secure, hard to reverse. Default Secrets are only base64 encoded.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q189: Which taint effect will evict existing pods and prevent new ones from being scheduled?

A. NoSchedule  
B. PreferNoSchedule  
C. NoExecute  
D. EvictAll  

**Correct Answer:** C. NoExecute

> **Explanation:** Taint effects: NoSchedule (prevents new pods, existing stay), PreferNoSchedule (soft preference), NoExecute (evicts existing pods AND prevents new ones).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q190: What happens if a pod doesn't have a toleration for a node's taint?

A. The pod runs anyway  
B. The pod is scheduled but runs slowly  
C. The pod cannot be scheduled on that node  
D. The taint is removed  

**Correct Answer:** C. The pod cannot be scheduled on that node

> **Explanation:** Taints repel pods. Without matching tolerations, the scheduler skips tainted nodes. This is how you dedicate nodes to specific workloads.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

### Q191: What is the difference between ConfigMap and Secret?

A. ConfigMap is for non-sensitive data; Secret is for sensitive data  
B. ConfigMap is encrypted; Secret is not  
C. They are identical  
D. ConfigMap is only for environment variables  

**Correct Answer:** A. ConfigMap is for non-sensitive data; Secret is for sensitive data

> **Explanation:** ConfigMap: configuration, environment variables, config files. Secret: passwords, tokens, SSH keys, TLS certificates. Both can be consumed as env vars, command-line arguments, or files in volumes.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

# Cloud Native Application Delivery
**Exam Weight: 16%** | **Questions in this section: 45**

### Q192: What is continuous integration (CI) in the context of cloud-native?

A. Automatically deploying to production  
B. Automatically building and testing code changes  
C. Continuously monitoring running applications  
D. Integrating cloud providers  

**Correct Answer:** B. Automatically building and testing code changes

> **Explanation:** CI automatically builds, tests, and validates code every time a developer pushes changes. It catches bugs early and ensures code quality before deployment.

*Source: KCNA Supplemental Bank*

---

### Q193: What is continuous delivery (CD)?

A. Automatically pushing every commit directly to production  
B. Automatically preparing code so it is always in a deployable state  
C. Delivering container images to a registry  
D. Continuously monitoring application delivery  

**Correct Answer:** B. Automatically preparing code so it is always in a deployable state

> **Explanation:** CD extends CI by automating the release process so every passing build is deployable to production. Continuous deployment goes further by automatically deploying every passing build.

*Source: KCNA Supplemental Bank*

---

### Q194: What is a Helm repository?

A. A Git repository for storing Kubernetes manifests  
B. A location where Helm charts are published and can be searched/downloaded  
C. A container image registry  
D. A Kubernetes namespace for Helm releases  

**Correct Answer:** B. A location where Helm charts are published and can be searched/downloaded

> **Explanation:** Helm repositories (like Artifact Hub or private Chartmuseum) host versioned chart packages. Use helm repo add and helm search repo to discover and install charts.

*Source: KCNA Supplemental Bank*

---

### Q195: What does helm upgrade do?

A. Upgrades the Helm CLI version  
B. Updates an existing Helm release with a new chart version or values  
C. Upgrades the Kubernetes cluster  
D. Replaces all pods immediately  

**Correct Answer:** B. Updates an existing Helm release with a new chart version or values

> **Explanation:** helm upgrade applies changes to an existing Helm release (new chart version, updated values). Combined with --install, it creates the release if it doesn't exist (helm upgrade --install).

*Source: KCNA Supplemental Bank*

---

### Q196: What is Flux in the context of GitOps?

A. A container build tool  
B. A CNCF GitOps operator that syncs Kubernetes clusters to Git repositories  
C. A monitoring solution  
D. A secrets management tool  

**Correct Answer:** B. A CNCF GitOps operator that syncs Kubernetes clusters to Git repositories

> **Explanation:** Flux is a CNCF project (graduated) for implementing GitOps on Kubernetes. It watches Git repositories and automatically applies changes to the cluster, supporting Helm, Kustomize, and plain YAML.

*Source: KCNA Supplemental Bank*

---

### Q197: What is Kustomize used for?

A. Customizing container images  
B. Customizing Kubernetes manifests without templating using overlays  
C. Managing Helm charts  
D. Encrypting Kubernetes secrets  

**Correct Answer:** B. Customizing Kubernetes manifests without templating using overlays

> **Explanation:** Kustomize is built into kubectl (kubectl apply -k). It allows you to customize base YAML with overlays and patches without templating engines like Helm's Go templates.

*Source: KCNA Supplemental Bank*

---

### Q198: What does a container registry do?

A. Schedules containers on nodes  
B. Stores and distributes container images  
C. Monitors container health  
D. Manages container networking  

**Correct Answer:** B. Stores and distributes container images

> **Explanation:** Container registries (Docker Hub, GitHub Container Registry, Amazon ECR, Harbor) store versioned container images. The kubelet pulls images from registries when creating pods.

*Source: KCNA Supplemental Bank*

---

### Q199: What is a rolling deployment strategy?

A. Terminating all pods before starting new ones  
B. Incrementally replacing old pods with new pods while maintaining availability  
C. Routing only 1% of traffic to the new version  
D. Running new and old versions simultaneously on separate infrastructure  

**Correct Answer:** B. Incrementally replacing old pods with new pods while maintaining availability

> **Explanation:** Rolling updates (Kubernetes default) replace old pods gradually. maxUnavailable controls how many pods can be unavailable; maxSurge controls how many extra pods can be created during the update.

*Source: KCNA Supplemental Bank*

---

### Q200: What is the Recreate deployment strategy?

A. Gradually replacing pods one by one  
B. Terminating all existing pods before creating new ones (causes downtime)  
C. Routing a percentage of traffic to new pods  
D. Creating a complete second environment  

**Correct Answer:** B. Terminating all existing pods before creating new ones (causes downtime)

> **Explanation:** The Recreate strategy kills all existing pods first, then creates new ones. This causes downtime but ensures no two versions run simultaneously, useful for apps that can't run mixed versions.

*Source: KCNA Supplemental Bank*

---

### Q201: What is OCI (Open Container Initiative)?

A. A cloud provider organization  
B. A standards organization that defines container image and runtime specifications  
C. A Kubernetes networking standard  
D. A container monitoring protocol  

**Correct Answer:** B. A standards organization that defines container image and runtime specifications

> **Explanation:** The OCI defines open standards for container formats (image-spec), runtime (runtime-spec), and distribution (distribution-spec). This ensures containers built with one tool run on any OCI-compliant runtime.

*Source: KCNA Supplemental Bank*

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

### Q203: What does kubectl kustomize do?

A. Lists all custom resources  
B. Builds a set of kustomized Kubernetes manifests from a kustomization.yaml file  
C. Checks cluster health  
D. Generates Helm charts  

**Correct Answer:** B. Builds a set of kustomized Kubernetes manifests from a kustomization.yaml file

> **Explanation:** kubectl kustomize <dir> (or kubectl apply -k <dir>) reads a kustomization.yaml and outputs the final merged/patched manifests for review or application.

*Source: KCNA Supplemental Bank*

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

### Q205: What is a Dockerfile?

A. A script for orchestrating containers  
B. A text file with instructions for building a container image  
C. A Kubernetes manifest for pod creation  
D. A configuration file for the Docker daemon  

**Correct Answer:** B. A text file with instructions for building a container image

> **Explanation:** A Dockerfile contains instructions (FROM, RUN, COPY, CMD, EXPOSE, ENV) that the docker build command executes sequentially to create a container image.

*Source: KCNA Supplemental Bank*

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

### Q207: What is the purpose of .dockerignore?

A. To block Docker from running on certain systems  
B. To exclude files from the Docker build context  
C. To ignore Docker warnings  
D. To skip image layers during build  

**Correct Answer:** B. To exclude files from the Docker build context

> **Explanation:** Similar to .gitignore, .dockerignore prevents unnecessary files (node_modules, .git, build artifacts) from being sent to the Docker daemon, speeding up builds and reducing image size.

*Source: KCNA Supplemental Bank*

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

### Q209: What is supply chain security in cloud-native?

A. Securing the physical supply chain for hardware  
B. Ensuring the integrity and security of software artifacts from source code to deployment  
C. Managing vendor contracts  
D. Securing Kubernetes API access  

**Correct Answer:** B. Ensuring the integrity and security of software artifacts from source code to deployment

> **Explanation:** Supply chain security covers protecting the entire software delivery pipeline: source code integrity (git signing), image signing (Cosign/Notary), SBOM generation, and provenance verification (SLSA framework).

*Source: KCNA Supplemental Bank*

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

### Q211: What is a Software Bill of Materials (SBOM)?

A. A Kubernetes resource listing pod components  
B. An inventory of all software components and dependencies in a container image  
C. A budget document for software licenses  
D. A Dockerfile alternative  

**Correct Answer:** B. An inventory of all software components and dependencies in a container image

> **Explanation:** An SBOM lists all packages, libraries, and dependencies in a software artifact. It enables security teams to quickly identify vulnerable components when new CVEs are published.

*Source: KCNA Supplemental Bank*

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

### Q213: What is ArgoCD's sync operation?

A. Backing up cluster state to Git  
B. Applying the desired state from Git to the cluster  
C. Synchronizing cluster clocks  
D. Replicating state across clusters  

**Correct Answer:** B. Applying the desired state from Git to the cluster

> **Explanation:** An ArgoCD sync applies the manifests from the Git repository to the target Kubernetes cluster, reconciling the actual cluster state with the desired state defined in Git.

*Source: KCNA Supplemental Bank*

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

### Q215: What is semantic versioning (SemVer) in container images?

A. Version numbers based on image size  
B. A versioning scheme (MAJOR.MINOR.PATCH) conveying compatibility information  
C. A container image naming standard  
D. A registry tagging requirement  

**Correct Answer:** B. A versioning scheme (MAJOR.MINOR.PATCH) conveying compatibility information

> **Explanation:** SemVer: MAJOR version for breaking changes, MINOR for backward-compatible new features, PATCH for backward-compatible bug fixes. Widely used for Helm charts and container images.

*Source: KCNA Supplemental Bank*

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

### Q217: What is the purpose of a Helm hook?

A. A network hook for external events  
B. A way to execute actions at specific points in a Helm release lifecycle (pre-install, post-upgrade, etc.)  
C. A hook into the Kubernetes API  
D. A container startup hook  

**Correct Answer:** B. A way to execute actions at specific points in a Helm release lifecycle (pre-install, post-upgrade, etc.)

> **Explanation:** Helm hooks use annotations to trigger Jobs or Pods at lifecycle events: pre-install, post-install, pre-upgrade, post-upgrade, pre-delete, post-delete. Useful for database migrations, backups, or tests.

*Source: KCNA Supplemental Bank*

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

### Q219: What is image promotion in a CI/CD pipeline?

A. Marketing container images on social media  
B. Moving a validated image through stages (dev → staging → production) by updating its tag or deploying it  
C. Increasing container image priority  
D. Upgrading image versions automatically  

**Correct Answer:** B. Moving a validated image through stages (dev → staging → production) by updating its tag or deploying it

> **Explanation:** Image promotion ensures the exact same image binary that passed tests in staging is deployed to production, maintaining immutability while progressing through environments.

*Source: KCNA Supplemental Bank*

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

### Q221: What is the primary purpose of ArgoCD?

A. Container image building  
B. GitOps continuous delivery for Kubernetes  
C. Log aggregation  
D. Network routing  

**Correct Answer:** B. GitOps continuous delivery for Kubernetes

> **Explanation:** ArgoCD is a declarative GitOps continuous delivery tool. It monitors Git repositories and automatically synchronizes the desired state to Kubernetes clusters.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q223: What is a Helm chart?

A. A performance monitoring tool  
B. A package of Kubernetes resources  
C. A network topology diagram  
D. A container image registry  

**Correct Answer:** B. A package of Kubernetes resources

> **Explanation:** A Helm chart is a collection of files that describe related Kubernetes resources. It includes templates, default values, and metadata.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q225: What is the purpose of an Ingress controller?

A. To manage container lifecycle  
B. To provide HTTP/HTTPS routing to services  
C. To schedule pods on nodes  
D. To store application secrets  

**Correct Answer:** B. To provide HTTP/HTTPS routing to services

> **Explanation:** Ingress controllers implement Ingress resources, providing HTTP/HTTPS routing, load balancing, SSL/TLS termination, and name-based virtual hosting.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q227: Which tool would you use to deploy applications to multiple Kubernetes clusters from a Git repository?

A. Helm  
B. ArgoCD  
C. kubectl  
D. Docker  

**Correct Answer:** B. ArgoCD

> **Explanation:** ArgoCD excels at multi-cluster management with Git as the source of truth. It can deploy to multiple clusters from a single Git repository.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q229: When would you choose ArgoCD over Helm?

A. For simple one-time deployments  
B. For GitOps-based continuous delivery across multiple clusters  
C. For building container images  
D. For monitoring applications  

**Correct Answer:** B. For GitOps-based continuous delivery across multiple clusters

> **Explanation:** Choose ArgoCD when you need: GitOps workflow, multi-cluster deployment, automatic synchronization, drift detection and auto-healing. Choose Helm for package management and templating.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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

### Q231: What is stored in a Helm values file?

A. Container images  
B. Configuration parameters that can be customized  
C. Network policies  
D. User authentication tokens  

**Correct Answer:** B. Configuration parameters that can be customized

> **Explanation:** values.yaml contains default configuration values and parameters that can be overridden during installation. Install with custom values: helm install myapp mychart -f custom-values.yaml

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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

### Q233: Which Gateway API resource defines the actual gateway that handles traffic?

A. GatewayClass  
B. Gateway  
C. HTTPRoute  
D. Service  

**Correct Answer:** B. Gateway

> **Explanation:** Gateway API resources: GatewayClass (defines class of gateways), Gateway (actual gateway instance that listens for traffic), HTTPRoute/TCPRoute (routing rules).

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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

### Q235: What is the role of an Ingress controller?

A. To schedule pods  
B. To implement the rules defined in Ingress resources  
C. To manage secrets  
D. To monitor applications  

**Correct Answer:** B. To implement the rules defined in Ingress resources

> **Explanation:** Ingress controllers watch for Ingress resources, configure underlying load balancer (nginx, HAProxy, Traefik), handle HTTP/HTTPS routing, manage TLS termination. Popular: nginx, Traefik, HAProxy, Istio.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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

### Q237: What is OpenTelemetry?

A. A specific monitoring tool  
B. A vendor-neutral observability framework for collecting metrics, logs, and traces  
C. A cloud provider's monitoring service  
D. A Kubernetes-only logging solution  

**Correct Answer:** B. A vendor-neutral observability framework for collecting metrics, logs, and traces

> **Explanation:** OpenTelemetry (OTel) is a CNCF project that provides APIs, SDKs, and tools for generating and collecting telemetry data (metrics, logs, traces) in a vendor-neutral way.

*Source: KCNA Supplemental Bank*

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

### Q239: What is PromQL?

A. A container query language  
B. Prometheus Query Language for querying time-series metrics  
C. A SQL dialect for Kubernetes  
D. A policy query language  

**Correct Answer:** B. Prometheus Query Language for querying time-series metrics

> **Explanation:** PromQL is the query language for Prometheus. It allows you to aggregate, filter, and compute on time-series data. Example: rate(http_requests_total[5m]) calculates request rate over 5 minutes.

*Source: KCNA Supplemental Bank*

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

### Q241: What is Fluentd used for?

A. Container scheduling  
B. Log collection and forwarding  
C. Metrics scraping  
D. Network policy enforcement  

**Correct Answer:** B. Log collection and forwarding

> **Explanation:** Fluentd is a CNCF graduated project for unified log collection and routing. It collects logs from containers, parses them, and forwards to destinations (Elasticsearch, S3, Kafka, etc.).

*Source: KCNA Supplemental Bank*

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

### Q243: What is a service mesh?

A. A Kubernetes networking plugin  
B. An infrastructure layer for managing service-to-service communication  
C. A DNS solution for microservices  
D. A container image registry  

**Correct Answer:** B. An infrastructure layer for managing service-to-service communication

> **Explanation:** A service mesh (e.g., Istio, Linkerd) handles service discovery, load balancing, encryption (mTLS), observability, and traffic management between microservices, typically using a sidecar proxy pattern.

*Source: KCNA Supplemental Bank*

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

### Q245: What is the 12-factor app methodology relevant to cloud-native?

A. A list of 12 Kubernetes objects  
B. A set of best practices for building scalable, maintainable cloud-native applications  
C. A 12-step deployment process  
D. 12 security requirements for containers  

**Correct Answer:** B. A set of best practices for building scalable, maintainable cloud-native applications

> **Explanation:** The 12-factor app methodology defines best practices including: codebase in version control, explicit dependencies, config in environment variables, stateless processes, and disposability.

*Source: KCNA Supplemental Bank*

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

### Q247: What is the purpose of a container image layer?

A. To separate containers on the same node  
B. To enable efficient image sharing and caching through incremental file system layers  
C. To provide network isolation  
D. To limit container resource usage  

**Correct Answer:** B. To enable efficient image sharing and caching through incremental file system layers

> **Explanation:** Container images are built in layers (UnionFS). Each Dockerfile instruction creates a layer. Layers are cached and shared between images, reducing storage and pull time.

*Source: KCNA Supplemental Bank*

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

### Q249: What is the purpose of etcd in a Kubernetes cluster?

A. To run the Kubernetes API  
B. To store all cluster state and configuration data persistently  
C. To manage container networking  
D. To schedule pods  

**Correct Answer:** B. To store all cluster state and configuration data persistently

> **Explanation:** etcd is a distributed, reliable key-value store used as Kubernetes' primary data store. All cluster objects (pods, services, secrets, configmaps) are stored in etcd. It uses the Raft consensus algorithm.

*Source: KCNA Supplemental Bank*

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

### Q251: What is the CNCF project maturity model?

A. Alpha, Beta, Stable  
B. Sandbox, Incubating, Graduated  
C. Early Access, Preview, GA  
D. Experimental, Production-Ready, Deprecated  

**Correct Answer:** B. Sandbox, Incubating, Graduated

> **Explanation:** CNCF project maturity levels: Sandbox (early-stage, experimental), Incubating (used in production by some adopters), Graduated (widely adopted, demonstrated stability). Kubernetes, Prometheus, and Envoy are graduated projects.

*Source: KCNA Supplemental Bank*

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

### Q253: What is mTLS (mutual TLS) in a service mesh context?

A. A multi-tenant TLS solution  
B. Both client and server authenticate each other with certificates  
C. TLS used only for external traffic  
D. A deprecated security protocol  

**Correct Answer:** B. Both client and server authenticate each other with certificates

> **Explanation:** mTLS requires both parties in a connection to present certificates. In service meshes, this enables zero-trust networking where every service-to-service call is authenticated and encrypted.

*Source: KCNA Supplemental Bank*

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

### Q255: What is microservices architecture?

A. Architecture using very small servers  
B. An architectural style decomposing applications into small, independent, deployable services  
C. A networking protocol for small packets  
D. A container size limit  

**Correct Answer:** B. An architectural style decomposing applications into small, independent, deployable services

> **Explanation:** Microservices break applications into independently deployable services each responsible for a specific business capability. Benefits: independent scaling, technology diversity, faster deployment cycles.

*Source: KCNA Supplemental Bank*

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

### Q257: What is serverless computing?

A. Computing without any servers  
B. A cloud execution model where the provider manages infrastructure and scales automatically per request  
C. Containers without a host OS  
D. A virtual machine type  

**Correct Answer:** B. A cloud execution model where the provider manages infrastructure and scales automatically per request

> **Explanation:** Serverless (FaaS — Function as a Service) abstracts servers entirely. Developers deploy functions; the provider handles provisioning, scaling (including to zero), and billing per execution.

*Source: KCNA Supplemental Bank*

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

### Q259: What is the role of Prometheus Alertmanager?

A. Collecting metrics  
B. Handling alerts from Prometheus including deduplication, grouping, silencing, and routing  
C. Visualizing dashboards  
D. Storing log data  

**Correct Answer:** B. Handling alerts from Prometheus including deduplication, grouping, silencing, and routing

> **Explanation:** Alertmanager receives firing alerts from Prometheus, deduplicates and groups them, applies silences and inhibitions, and routes notifications to receivers (PagerDuty, Slack, email, etc.).

*Source: KCNA Supplemental Bank*

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

### Q261: What is an SLI (Service Level Indicator)?

A. A legal indicator in service contracts  
B. A quantitative metric measuring service behavior (e.g., request latency, error rate)  
C. An infrastructure reliability index  
D. A log aggregation tool  

**Correct Answer:** B. A quantitative metric measuring service behavior (e.g., request latency, error rate)

> **Explanation:** SLIs are metrics that measure service performance. Common SLIs: availability (% successful requests), latency (% requests under threshold), error rate, throughput.

*Source: KCNA Supplemental Bank*

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

### Q263: What is chaos engineering?

A. Deliberately introducing failures in production to test system resilience  
B. Running disorganized deployments  
C. A debugging methodology  
D. Random auto-scaling  

**Correct Answer:** A. Deliberately introducing failures in production to test system resilience

> **Explanation:** Chaos engineering (popularized by Netflix's Chaos Monkey) deliberately injects failures (kill pods, inject latency, drain nodes) to verify that systems can tolerate real-world failures. Tools: Chaos Mesh, LitmusChaos (both CNCF projects).

*Source: KCNA Supplemental Bank*

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

### Q265: What is the CNCF Security TAG (Technical Advisory Group)?

A. A Kubernetes security scanner  
B. A CNCF group that advises on cloud-native security best practices and assessments  
C. A secrets management tool  
D. An admission controller  

**Correct Answer:** B. A CNCF group that advises on cloud-native security best practices and assessments

> **Explanation:** The CNCF Security TAG provides security guidance, project security assessments (audits), whitepapers (Cloud Native Security Whitepaper), and best practices for cloud-native projects and adopters.

*Source: KCNA Supplemental Bank*

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

### Q267: What is eBPF and its relevance to cloud-native?

A. An extended build process for container images  
B. Extended Berkeley Packet Filter — enables high-performance networking, observability, and security in Linux  
C. An encryption protocol for Kubernetes  
D. A container file system standard  

**Correct Answer:** B. Extended Berkeley Packet Filter — enables high-performance networking, observability, and security in Linux

> **Explanation:** eBPF allows running sandboxed programs in the kernel without changing kernel source or loading modules. In cloud-native: Cilium uses eBPF for high-performance networking/security, Falco/Tetragon for runtime security.

*Source: KCNA Supplemental Bank*

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

### Q269: What is the purpose of a service account token in Kubernetes?

A. To authenticate human users  
B. To allow pods to authenticate to the Kubernetes API server  
C. To encrypt pod-to-pod communication  
D. To store application secrets  

**Correct Answer:** B. To allow pods to authenticate to the Kubernetes API server

> **Explanation:** Service account tokens are JWT credentials that pods use to authenticate API requests. Since Kubernetes 1.21, tokens are projected (bound to pod lifetime) rather than long-lived, improving security.

*Source: KCNA Supplemental Bank*

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

### Q271: What is OPA (Open Policy Agent)?

A. A container runtime  
B. A general-purpose policy engine that enforces rules across cloud-native systems  
C. A Kubernetes dashboard  
D. A CI/CD tool  

**Correct Answer:** B. A general-purpose policy engine that enforces rules across cloud-native systems

> **Explanation:** OPA (CNCF graduated) provides a unified policy language (Rego) for enforcing policies across Kubernetes admission control (via Gatekeeper), Terraform, microservices, and CI/CD pipelines.

*Source: KCNA Supplemental Bank*

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

### Q273: What is a CNCF Sandbox project?

A. A deprecated project  
B. An early-stage project accepted by CNCF that shows promise but has limited production adoption  
C. A project used only in testing environments  
D. A project under security review  

**Correct Answer:** B. An early-stage project accepted by CNCF that shows promise but has limited production adoption

> **Explanation:** CNCF Sandbox is the entry-level maturity. Projects must be cloud-native, foster an open community, and show potential. Sandbox projects are experimental and may not be production-ready.

*Source: KCNA Supplemental Bank*

---

### Q274: What does CNCF stand for?

A. Cloud Native Container Foundation  
B. Cloud Native Computing Federation  
C. Cloud Native Computing Foundation  
D. Cloud Native Cloud Federation  

**Correct Answer:** C. Cloud Native Computing Foundation

*Source: moabukar/KCNA GitHub*

---

### Q275: What are the 4Cs of Cloud Native Security?

A. Cluster, Cloud, Containers, Compute  
B. Compute, Cloud, Code, Containers  
C. Code, Container, Cluster, Cloud  
D. Code, Containers, Computer, Computing  

**Correct Answer:** C. Code, Container, Cluster, Cloud

*Source: moabukar/KCNA GitHub*

---

### Q276: What does serverless computing not need?

A. Cloud  
B. Servers  
C. The provisioning and operating infrastructure  
D. Code  

**Correct Answer:** C. The provisioning and operating infrastructure

*Source: moabukar/KCNA GitHub*

---

### Q277: Which of the following is not a fundamental metric used in Site Reliability Engineering?

A. Service Level Objective (SLO)  
B. Service Level Indicator (SLI)  
C. Service Level Definition (SLD)  
D. Service Level Agreement (SLA)  

**Correct Answer:** C. Service Level Definition (SLD)

*Source: moabukar/KCNA GitHub*

---

### Q278: Which of the following Computing model doesn't require provisioning of infrastructure?

A. EC2 Instances  
B. Infrastructure as Service  
C. Serverless  
D. Bare Metal Model  

**Correct Answer:** C. Serverless

*Source: moabukar/KCNA GitHub*

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

### Q280: What is the purpose of distributed tracing?

A. To track requests as they flow through microservices  
B. To monitor disk usage  
C. To manage network routing  
D. To schedule container workloads  

**Correct Answer:** A. To track requests as they flow through microservices

> **Explanation:** Distributed tracing tracks requests across multiple services, showing request path, latency, errors and bottlenecks. Tools: Jaeger, Zipkin.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q282: Which of the following is a core principle of cloud-native architecture?

A. Monolithic application design  
B. Manual scaling and deployment  
C. Microservices, containers, and dynamic orchestration  
D. Single point of failure for simplicity  

**Correct Answer:** C. Microservices, containers, and dynamic orchestration

> **Explanation:** Cloud-native principles: microservices architecture, containerization, dynamic orchestration (Kubernetes), automation, CI/CD, resilience and observability, DevOps culture.

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q284: Which image pull policy instructs Kubernetes to always pull the container image from the registry?

A. IfNotPresent  
B. Never  
C. Always  
D. OnUpdate  

**Correct Answer:** C. Always

> **Explanation:** Image pull policies: Always (pull every time, default for :latest), IfNotPresent (pull only if not cached, default for specific tags), Never (must exist locally).

*Source: msahihi/KCNA-study-guide (Mock Set 1)*

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

### Q286: Which tool is used for distributed tracing in cloud-native applications?

A. Prometheus  
B. Jaeger  
C. Fluentd  
D. CoreDNS  

**Correct Answer:** B. Jaeger

> **Explanation:** Distributed tracing tools: Jaeger (CNCF distributed tracing platform), Zipkin (Twitter's tracing system), OpenTelemetry (vendor-neutral observability framework). Prometheus is for metrics, not traces.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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

### Q288: What is a 'trace' in distributed tracing?

A. A single log entry  
B. The complete journey of a request through multiple services  
C. A network packet  
D. A container event  

**Correct Answer:** B. The complete journey of a request through multiple services

> **Explanation:** Tracing terminology: Trace (end-to-end request flow across all services), Span (single operation within the trace), Tag (metadata attached to spans). Example: Web request → API → Database = one trace, three spans.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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

### Q290: What is the CNCF's mission?

A. To sell cloud services  
B. To provide a vendor-neutral home for open-source cloud-native projects  
C. To replace Kubernetes  
D. To compete with major cloud providers  

**Correct Answer:** B. To provide a vendor-neutral home for open-source cloud-native projects

> **Explanation:** CNCF mission: host and nurture cloud-native open-source projects, vendor-neutral governance, foster community and collaboration, provide certification programs (KCNA, CKA, etc.). Part of the Linux Foundation.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

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
