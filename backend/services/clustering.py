from sklearn.cluster import KMeans
import numpy as np
from config import DEFAULT_CLUSTERS


def extract_dominant_colors(pixels: np.ndarray):
    kmeans = KMeans(n_clusters=DEFAULT_CLUSTERS, n_init=10)

    labels = kmeans.fit_predict(pixels)

    centers = kmeans.cluster_centers_

    counts = np.bincount(labels)

    sorted_indices = np.argsort(counts)[::-1]

    sorted_colors = centers[sorted_indices]

    return sorted_colors.astype(int)