from sklearn.cluster import KMeans
import numpy as np
from config import DEFAULT_CLUSTERS

def extract_dominant_colors(pixels: np.ndarray):
    kmeans = KMeans(n_clusters=DEFAULT_CLUSTERS, n_init=10)
    kmeans.fit(pixels)
    colors = kmeans.cluster_centers_
    return colors.astype(int)