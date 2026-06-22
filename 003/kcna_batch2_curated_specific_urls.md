# KCNA Batch 2 — Curated Specific URLs

Questions 101-200 with manually curated, question-specific external URLs and targeted review notes where clarification improves precision.

### Q101: Which kubectl command displays events for the cluster?

A. kubectl get events  
B. kubectl logs events  
C. kubectl describe events  
D. kubectl show events  

**Correct Answer:** A. kubectl get events

> **Explanation:** kubectl get events lists cluster events. Add --watch to stream events. Events show pod scheduling, image pulls, errors, and warnings.

*Source: msahihi/KCNA-study-guide (Mock Set 2)*

---

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get)

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

**External Reference:** [https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)

**Review Note:** Validated: both `kubectl create -f` and `kubectl apply -f` can create resources, but `apply` is declarative and also updates existing objects.

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

**External Reference:** [https://kubernetes.io/docs/concepts/security/pod-security-standards/#privileged](https://kubernetes.io/docs/concepts/security/pod-security-standards/#privileged)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/job/](https://kubernetes.io/docs/concepts/workloads/controllers/job/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service](https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service)

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

**External Reference:** [https://kubernetes.io/docs/concepts/architecture/cloud-controller/#node-controller](https://kubernetes.io/docs/concepts/architecture/cloud-controller/#node-controller)

**Review Note:** Kept as Node Controller, but the implementation details are part of the controller-manager and may be discussed differently across study guides.

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/#the-two-sorts-of-pod-isolation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#the-two-sorts-of-pod-isolation)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

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

**External Reference:** [https://martinfowler.com/bliki/CanaryRelease.html](https://martinfowler.com/bliki/CanaryRelease.html)

**Review Note:** Mapped to the canonical canary-release definition because this is a delivery pattern rather than a Kubernetes API object.

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

---

### Q114: What is the purpose of a NetworkPolicy in Kubernetes?

A. To configure DNS resolution  
B. To control network traffic between pods  
C. To manage external load balancers  
D. To define service endpoints  

**Correct Answer:** B. To control network traffic between pods

> **Explanation:** NetworkPolicies restrict pod-to-pod and pod-to-external network traffic. By default all traffic is allowed; a NetworkPolicy can selectively allow or deny ingress and egress.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies)

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

**External Reference:** [https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler)

**Review Note:** VPA documentation is maintained in the autoscaler project rather than the main Kubernetes docs.

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

**External Reference:** [https://kubernetes.io/docs/concepts/cluster-administration/node-autoscaling/](https://kubernetes.io/docs/concepts/cluster-administration/node-autoscaling/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes)

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

**External Reference:** [https://kubernetes.io/docs/concepts/storage/storage-classes/](https://kubernetes.io/docs/concepts/storage/storage-classes/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/](https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/)

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

**External Reference:** [https://www.tigera.io/project-calico/](https://www.tigera.io/project-calico/)

**Review Note:** Calico is a common answer for policy enforcement, but the exact wording matters because multiple CNIs support NetworkPolicy.

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

**External Reference:** [https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-modes](https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-modes)

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

**External Reference:** [https://kubernetes.io/docs/concepts/architecture/cri/](https://kubernetes.io/docs/concepts/architecture/cri/)

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

**External Reference:** [https://kubernetes-csi.github.io/docs/](https://kubernetes-csi.github.io/docs/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#headless-services](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#rolling-updates](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#rolling-updates)

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

**External Reference:** [https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding)

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

**External Reference:** [https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/disruptions/](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/init-containers/](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs)

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

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/#image-names](https://kubernetes.io/docs/concepts/containers/images/#image-names)

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

**External Reference:** [https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/extend-kubernetes/operator/](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-storage](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-storage)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#externalname](https://kubernetes.io/docs/concepts/services-networking/service/#externalname)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/configure-pod-container/security-context/](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors](https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors)

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

**External Reference:** [https://kubernetes.io/docs/concepts/extend-kubernetes/operator/](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)

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

**External Reference:** [https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions](https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

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

**External Reference:** [https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#rollout)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/storage/persistent-volumes/](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/architecture/garbage-collection/](https://kubernetes.io/docs/concepts/architecture/garbage-collection/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/)

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

**External Reference:** [https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-modes](https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-modes)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/)

---

### Q159: What is the most common autoscaling method in the world of cloud-native?

A. Horizontal Scaling  
B. Upward Scaling  
C. Vertical Scaling  
D. Downward Scaling  

**Correct Answer:** A. Horizontal Scaling

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

---

### Q160: The Open Container Initiative (OCI) provides container standards for?

A. Runtime, Image, Distribution  
B. Image, Build, Distributions  
C. Container, Image, Build  
D. Container, image distribution  

**Correct Answer:** A. Runtime, Image, Distribution

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://opencontainers.org/about/overview/](https://opencontainers.org/about/overview/)

---

### Q161: What are the main part of a Service Mesh?

A. Master plane and worker node  
B. Kube-scheduler and controller manager  
C. Data plane and Control plane  
D. Discovery plane and date plane  

**Correct Answer:** C. Data plane and Control plane

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://istio.io/latest/docs/concepts/what-is-istio/#what-is-a-service-mesh](https://istio.io/latest/docs/concepts/what-is-istio/#what-is-a-service-mesh)

---

### Q162: Which of the following container runtime is marked as deprecated by Kubernetes?

A. gVisor  
B. Docker  
C. containerd  
D. CRI-O  

**Correct Answer:** B. Docker

*Source: moabukar/KCNA GitHub*

---

**External Reference:** [https://kubernetes.io/blog/2022/02/17/dockershim-faq/](https://kubernetes.io/blog/2022/02/17/dockershim-faq/)

**Review Note:** Clarified by reference choice: this is specifically about dockershim deprecation/removal in Kubernetes, not Docker usage in the broader ecosystem.

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/#the-two-sorts-of-pod-isolation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#the-two-sorts-of-pod-isolation)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/secret/](https://kubernetes.io/docs/concepts/configuration/secret/)

**Review Note:** Accurate as default behavior, with the important nuance that Kubernetes can be configured to encrypt Secrets at rest.

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/security/service-accounts/](https://kubernetes.io/docs/concepts/security/service-accounts/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/disruptions/](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/)

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

**External Reference:** [https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/#updating-images](https://kubernetes.io/docs/concepts/containers/images/#updating-images)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource](https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors](https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/pods/disruptions/](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services](https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#limitations](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#limitations)

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

**External Reference:** [https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/configuration/secret/](https://kubernetes.io/docs/concepts/configuration/secret/)

---

### Q192: What is continuous integration (CI) in the context of cloud-native?

A. Automatically deploying to production  
B. Automatically building and testing code changes  
C. Continuously monitoring running applications  
D. Integrating cloud providers  

**Correct Answer:** B. Automatically building and testing code changes

> **Explanation:** CI automatically builds, tests, and validates code every time a developer pushes changes. It catches bugs early and ensures code quality before deployment.

*Source: KCNA Supplemental Bank*

---

**External Reference:** [https://www.redhat.com/en/topics/devops/what-is-ci-cd](https://www.redhat.com/en/topics/devops/what-is-ci-cd)

**Review Note:** CI and CD references use an authoritative industry explainer rather than Kubernetes docs because the topic is broader than Kubernetes itself.

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

**External Reference:** [https://www.redhat.com/en/topics/devops/what-is-ci-cd](https://www.redhat.com/en/topics/devops/what-is-ci-cd)

**Review Note:** Continuous delivery is intentionally distinguished from continuous deployment in the linked source.

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

**External Reference:** [https://helm.sh/docs/topics/chart_repository/](https://helm.sh/docs/topics/chart_repository/)

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

**External Reference:** [https://helm.sh/docs/helm/helm_upgrade/](https://helm.sh/docs/helm/helm_upgrade/)

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

**External Reference:** [https://fluxcd.io/flux/concepts/](https://fluxcd.io/flux/concepts/)

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

**External Reference:** [https://kustomize.io/](https://kustomize.io/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/containers/images/](https://kubernetes.io/docs/concepts/containers/images/)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment)

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

**External Reference:** [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment)

---
