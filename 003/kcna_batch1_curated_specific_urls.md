# KCNA Batch 1 — Curated Specific URLs

Questions 1-100 with manually curated, question-specific external URLs and targeted review notes where clarification improves precision.

### Q1: Which Kubernetes component acts as the front-end API for the cluster?

A. etcd  
B. kube-scheduler  
C. kube-apiserver  
D. controller-manager  

**Correct Answer:** C. kube-apiserver

> **Explanation:** The kube-apiserver is the central management component that exposes the Kubernetes API. All cluster communication passes through it.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kubernetes.io/docs/concepts/overview/components/#kube-apiserver](https://kubernetes.io/docs/concepts/overview/components/#kube-apiserver)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager](https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#exec](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#exec)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/configmap/](https://kubernetes.io/docs/concepts/configuration/configmap/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/configmap/](https://kubernetes.io/docs/concepts/configuration/configmap/)

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

**External Reference:** [https://kubernetes.io/docs/reference/access-authn-authz/rbac/](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)

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

**External Reference:** [https://kubernetes.io/docs/reference/access-authn-authz/rbac/](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)

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

**External Reference:** [https://kubernetes.io/docs/reference/kubectl/quick-reference/](https://kubernetes.io/docs/reference/kubectl/quick-reference/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/ingress/](https://kubernetes.io/docs/concepts/services-networking/ingress/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/job/](https://kubernetes.io/docs/concepts/workloads/controllers/job/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)

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

**External Reference:** [https://kubernetes.io/docs/concepts/policy/resource-quotas/](https://kubernetes.io/docs/concepts/policy/resource-quotas/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/](https://kubernetes.io/docs/concepts/services-networking/service/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates](https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#delete](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#delete)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/#pods-with-multiple-containers](https://kubernetes.io/docs/concepts/workloads/pods/#pods-with-multiple-containers)

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

**External Reference:** [https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/policy/resource-quotas/](https://kubernetes.io/docs/concepts/policy/resource-quotas/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/policy/limit-range/](https://kubernetes.io/docs/concepts/policy/limit-range/)

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

**External Reference:** [https://kubernetes.io/docs/reference/using-api/](https://kubernetes.io/docs/reference/using-api/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/names/](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#top](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#top)

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

**External Reference:** [https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)

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

**External Reference:** [https://kubernetes.io/docs/reference/using-api/](https://kubernetes.io/docs/reference/using-api/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#describe](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#describe)

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

**External Reference:** [https://kubernetes.io/docs/reference/using-api/health-checks/](https://kubernetes.io/docs/reference/using-api/health-checks/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

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

**External Reference:** [https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/](https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/architecture/#node-components](https://kubernetes.io/docs/concepts/architecture/#node-components)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/](https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#revision-history-limit](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#revision-history-limit)

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

**External Reference:** [https://kubernetes.io/docs/reference/kubectl/quick-reference/](https://kubernetes.io/docs/reference/kubectl/quick-reference/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/](https://kubernetes.io/docs/concepts/workloads/pods/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/security/service-accounts/](https://kubernetes.io/docs/concepts/security/service-accounts/)

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

**External Reference:** [https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-uris](https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-uris)

---

### Q50: The Kubernetes object "Stateful Set" requires which service for the network identity of Pods?

A. ClusterIP  
B. NodePort  
C. LoadBalancer  
D. Headless Service  

**Correct Answer:** D. Headless Service

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id)

---

### Q51: Kubernetes was originally developed by who?

A. Amazon  
B. Google  
C. Microsoft  
D. Facebook  

**Correct Answer:** B. Google

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

---

### Q52: What are the TWO types of Kubernetes nodes? Select TWO answers.

A. Worker Node  
B. Internal Node  
C. Control Plane Node  
D. Data plane  

**Correct Answer:** A. Worker Node and C. Control Plane Node

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/architecture/nodes/](https://kubernetes.io/docs/concepts/architecture/nodes/)

---

### Q53: What is the name of the agent that runs on each Kubernetes worker node?

A. etcd  
B. kube-API server  
C. kube-proxy  
D. kubelet  

**Correct Answer:** D. kubelet

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/architecture/#node-components](https://kubernetes.io/docs/concepts/architecture/#node-components)

---

### Q54: Which of the following is not part of the Control Plane in Kubernetes?

A. etcd  
B. kube-API server  
C. kube scheduler  
D. kube-proxy  

**Correct Answer:** D. kube-proxy

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/overview/components/](https://kubernetes.io/docs/concepts/overview/components/)

---

### Q55: Which access control component of Kubernetes is responsible for authorisation?

A. Config Maps  
B. Service Account  
C. Admission Controller  
D. Role-Based Access Control (RBAC)  

**Correct Answer:** D. Role-Based Access Control (RBAC)

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/reference/access-authn-authz/authorization/](https://kubernetes.io/docs/reference/access-authn-authz/authorization/)

---

### Q56: Which control plane component is responsible for scheduling pods?

A. kubelet  
B. kube controller manager  
C. kube scheduler  
D. kube-proxy  

**Correct Answer:** C. kube scheduler

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/)

---

### Q57: Select TWO commands which can be used to LIST all pods in all namespaces.

A. kubectl get pods  
B. kubectl get pods -n --all  
C. kubectl get pods -A  
D. kubectl get pods --all-namespaces  

**Correct Answer:** C. kubectl get pods -A and D. kubectl get pods --all-namespaces

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/reference/kubectl/quick-reference/](https://kubernetes.io/docs/reference/kubectl/quick-reference/)

---

### Q58: What is the command to list all the available objects in your Kubernetes cluster?

A. kubectl list api-resources  
B. kubectl get apis  
C. kubectl get api-resources  
D. kubectl api-resources  

**Correct Answer:** D. kubectl api-resources

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/reference/kubectl/generated/kubectl_api-resources/](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_api-resources/)

**Review Note:** Validated: `kubectl api-resources` is the canonical command; `kubectl get api-resources` is not valid.

---

### Q59: Which of these is not a service type in Kubernetes?

A. ClusterIP  
B. NodePort  
C. Ingress  
D. LoadBalancer  

**Correct Answer:** C. Ingress

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)

---

### Q60: What language is used to specify and create a Kubernetes resource?

A. JavaScript  
B. Python  
C. YAML  
D. JSON  

**Correct Answer:** C. YAML

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)

**Review Note:** Adjusted by reference choice: Kubernetes accepts YAML and JSON manifests, though YAML is more commonly used in practice.

---

### Q61: Which of the following is not a required field to create a Kubernetes resource?

A. kind  
B. apiVersion  
C. container  
D. metadata  

**Correct Answer:** C. container

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cordon](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cordon)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/init-containers/](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run)

**Review Note:** Kept the answer as-is for exam intent, but note that `kubectl create` supports many resource types while `kubectl run` is commonly used for imperative pod creation.

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

**External Reference:** [https://kubernetes.io/docs/concepts/security/pod-security-standards/](https://kubernetes.io/docs/concepts/security/pod-security-standards/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cordon](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cordon)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/)

**Review Note:** Validated against pod lifecycle documentation; default restartPolicy is `Always` for Pods created by controllers.

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#set](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#set)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/](https://kubernetes.io/docs/concepts/workloads/pods/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#describe](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#describe)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer)

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

**External Reference:** [https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/storage/volumes/#emptydir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/secret/](https://kubernetes.io/docs/concepts/configuration/secret/)

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

**External Reference:** [https://martinfowler.com/bliki/BlueGreenDeployment.html](https://martinfowler.com/bliki/BlueGreenDeployment.html)

**Review Note:** This topic is deployment-strategy oriented rather than Kubernetes-object specific, so the reference points to Martin Fowler for the canonical blue-green definition.

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#run)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#initial-namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#initial-namespaces)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#config-current-context](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#config-current-context)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#label](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#label)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#top](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#top)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

---
