(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ahi8:function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return l})),i.d(t,"default",(function(){return p}));var n=i("Fcif"),a=i("+I+c"),r=(i("mXGw"),i("/FXl")),o=i("TjRS"),s=i("zmid"),c=i("cry5"),l=(i("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/vtracer.mdx"}});var h=o.a;function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)(h,Object(n.a)({},i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"vtracer"},"VTracer"),Object(r.b)("p",null,"Author: ",Object(r.b)("a",{href:"//github.com/shpun817",parentName:"p"},"Sanford Pun")," | Editor: ",Object(r.b)("a",{href:"//github.com/tyt2y3",parentName:"p"},"Chris Tsang")," | Published: 2020-11-01"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("a",{href:"//www.visioncortex.org/vtracer/",parentName:"p"},"VTracer")," is a utility to convert raster images into vector graphics. The input image is first clustered by ",Object(r.b)("a",{href:"/impression-docs",parentName:"p"},"Hierarchical Clustering"),", and each of the output clusters are traced into vector."),Object(r.b)("p",null,"The algorithm of vector tracing involves 3 main stages:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Convert pixels into path")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Simplify the path into polygon")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Smoothen the polygon and approximate it with a curve-fitter"))),Object(r.b)("h2",{id:"path-walking"},"Path Walking"),Object(r.b)("p",null,"VTracer first obtains the raw paths of pixel clusters. A walker is used to trace the outlines of every cluster after building an image tree. The walker would combine consecutive steps in the same direction."),Object(r.b)(s.a,{src:"vtracer/WalkerOptim.svg",text:"2 results of path-walking. Left: Naïve, Unoptimized walker. Right: Optimized walker.",mdxType:"Figure"}),Object(r.b)(s.a,{src:"vtracer/PipelineShowcase/Pixel.png",text:"Raw pixelated polygon",height:"200px",mdxType:"Figure"}),Object(r.b)("h2",{id:"path-simplification"},"Path Simplification"),Object(r.b)("p",null,"Path simplification consists of 2 steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Remove staircases")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Simplify by limiting subpath penalties"))),Object(r.b)("h3",{id:"staircase-removal"},"Staircase Removal"),Object(r.b)("p",null,"From the previous stage, we have obtained a path whose consecutive edges must have different directions, i.e. the shape is represented by the minimum number of edges with 100% fidelity. However, to represent slant lines and curves in raster graphics, “jaggies” (or pixel staircases) inevitably occur. In this step, we aim at removing these artifacts."),Object(r.b)("p",null,"To replace a staircase with a straight line (hence “removing” it), one may adopt an outset (“additive”) or inset (“subtractive”) approach. Both approaches are justifiable in difference contexts, so the key is to maintain consistency in the same shape. In order to determine which points to keep, we make use of the ",Object(r.b)("i",null,"signed area"),"."),Object(r.b)(s.a,{src:"vtracer/Staircase.svg",mdxType:"Figure"}),Object(r.b)("p",null,"The signed area of a right triangle is a metric used to determine whether the vertices are arranged clockwise or anti-clockwise geometrically. With this information, we can determine which points to keep on the staircase."),Object(r.b)("p",null,"For each point on the staircase, we calculate the signed area of the triangle formed by the previous point, the current point, and the next point on the path. The decision of whether the current point should be kept is then made by comparing the sign of the signed area and the clockwise-ness of the original path."),Object(r.b)(s.a,{src:"vtracer/SignedArea.svg",text:"Two examples of signed area. If outset(inset) is chosen, B(B’) is kept and B’(B) is discarded.",mdxType:"Figure"}),Object(r.b)("h3",{id:"simplify-by-limiting-penalties"},"Simplify by Limiting penalties"),Object(r.b)("p",null,"The path can be further simplified by evaluating the ",Object(r.b)("i",null,"penalty")," from replacing a subpath with one long edge from the first to the last point."),Object(r.b)(s.a,{src:"vtracer/RemoveWobble.svg",text:"Left: Path with wobbles. Right: Path approximated by red line, removing wobbles",mdxType:"Figure"}),Object(r.b)("p",null,"Given a subpath, we would like to determine if a line drawn from the first point to the last can approximate the whole subpath with high fidelity. The idea is to make sure that all points in the subpath are close enough to the approximating line. To avoid all the complicated coordinate geometry, we can simply evaluate the areas of triangles formed by the first point, the last point, and each in-between point."),Object(r.b)("p",null,"Let ΔABC be one such triangle, with A and C being the first and last points of the subpath respectively, and B being any in-between point. Let h and b be the height and the base (length of AC) respectively. VTracer models the penalty of ΔABC as ",Object(r.b)(c.a,{src:"/public/vtracer/PenaltyEquation.svg",invSrc:"/public/vtracer/PenaltyEquation_inv.svg",mdxType:"InlineEquation"}),", as the area of ΔABC and b can be obtained by simple geometry. It is crucial for the penalty to be directly proportional to h and b."),Object(r.b)("p",null,"Once the penalty is clearly defined, the procedure of simplification is straightforward. VTracer greedily extends a subpath until the maximum penalty along it exceeds a specific tolerance, then all edges in the subpath are replaced by one line from the first to the second last point (or equivalently, remove in-between points from the path). After the replacement, the same process is performed starting from the next point in the path. When the last subpath is extended to the last point in the whole path, the simplification stage concludes."),Object(r.b)(s.a,{src:"vtracer/Penalty.svg",mdxType:"Figure"}),Object(r.b)("h2",{id:"path-smoothing"},"Path Smoothing"),Object(r.b)(s.a,{src:"vtracer/PipelineShowcase/Original.png",text:"Sample Simplified 'S' Shape",height:"200px",mdxType:"Figure"}),Object(r.b)("p",null,"What we have now is a simplified polygon with high fidelity. However, if we feed the path to the curve fitter as is, the curves will approximate the shape poorly. This is because the curves are underdetermined given the small number of points. In order to generate points that lie on our desired shape, subdivision smoothing is performed."),Object(r.b)("h3",{id:"4-point-scheme"},"4-Point Scheme"),Object(r.b)("p",null,"VTracer adapts from the ",Object(r.b)("i",null,"4-Point Scheme")," subdivision algorithm, which is an interpolating smoothing method. The problem of the 4-Point Scheme is that all vertices would be smoothed into round corners, which, from our point of view, is a loss of fidelity."),Object(r.b)(s.a,{src:"vtracer/4-PointScheme.svg",text:"4-Point Scheme performed on segment A₁A₂",mdxType:"Figure"}),Object(r.b)(s.a,{src:"vtracer/4-PointSchemeProblem.svg",text:"If A2 is a corner, the 4-Point Scheme smooths it out iteratively.",mdxType:"Figure"}),Object(r.b)("h3",{id:"finding-corners"},"Finding corners"),Object(r.b)("p",null,"To preserve corners, we first have to locate them. VTracer finds corners by checking the ",Object(r.b)("i",null,"angle difference")," at each vertex. If the absolute angle difference exceeds a certain threshold, the vertex is considered to be a corner."),Object(r.b)(s.a,{src:"vtracer/Corner.svg",mdxType:"Figure"}),Object(r.b)("h6",{style:{textAlign:"center"}},Object(r.b)("p",null,"Angle difference from A to B is small => a is not a corner\n",Object(r.b)("br",null),"\nAngle difference from B to C is large => b is a corner")),Object(r.b)("h3",{id:"corner-preserving-4-point-scheme"},"Corner-Preserving 4-Point Scheme"),Object(r.b)("p",null,"In the original 4-Point Scheme, 2 adjacent points are always used to generate the new point for each segment. In our adapted version, we do not take the adjacent point for corners, but instead we take the corners themselves. For segments whose points are both corners, we simply ignore them."),Object(r.b)(s.a,{src:"vtracer/3-PointScheme.svg",mdxType:"Figure"}),Object(r.b)("p",null,"Since A₂ is a corner, the smoothing procedure does not take the adjacent point as B₂. As a result, the corner will be (approximately) preserved after smoothing, even after iterations."),Object(r.b)("p",null,"VTracer applies a threshold on the length of each segment during subdivision smoothing, so that the result will not be over-dense. This threshold should be decided carefully (mainly based on the resolution of image), otherwise the resulting path will be a poor approximation."),Object(r.b)("p",null,"Shown below are examples smoothed with no iteration:"),Object(r.b)(s.a,{src:"vtracer/PipelineShowcase/LengthThresholds.svg",text:"Length Thresholds 3.5/5.0/7.5",height:"200px",mdxType:"Figure"}),Object(r.b)("p",null,"Introducing iterations, you can see more points are generated by subdivision:"),Object(r.b)(s.a,{src:"vtracer/PipelineShowcase/MaxIterations.svg",text:"Iterations 0/1/2",height:"200px",mdxType:"Figure"}),Object(r.b)("p",null,"VTracer's implementation defaults to 10 iterations, and exit early when no further smoothing can be done on the path."),Object(r.b)("h2",{id:"curve-fitting"},"Curve Fitting"),Object(r.b)("p",null,"The path is now populated with nicely positioned and sufficiently dense points that faithfully represent our desired shape. Before feeding it to a (Bezier) curve-fitter, VTracer determines where to cut curves (splice points)."),Object(r.b)("h3",{id:"finding-splice-points"},"Finding Splice Points"),Object(r.b)("p",null,"To define a splice point, we make use of the ",Object(r.b)("i",null,"signed angle differences"),". Interpreting each edge along the path as vectors, we can define the signed angle difference from edge eᵢ to eᵢ₊₁ as the 2D angle of rotation θ ∊ (-π, π] required to rotate eᵢ to the same direction as eᵢ₊₁ (assume positive θ in clockwise direction)."),Object(r.b)("p",null,"It is sufficient for a vertex to be a splice point if it passes one of two tests: ",Object(r.b)("i",null,"point of inflection test")," and ",Object(r.b)("i",null,"angle displacement test"),"."),Object(r.b)("p",null,"Points of inflection can be found by tracking the signs of angle differences along the path. When the concavity of the path changes at a certain point, the sign of the signed angle difference also changes at that point."),Object(r.b)(s.a,{src:"vtracer/PointOfInflection.svg",mdxType:"Figure"}),Object(r.b)("h6",{style:{textAlign:"center"}},Object(r.b)("p",null,"As the sign of angle difference changes at point P, P is a point of inflection and hence a splice point.\n",Object(r.b)("br",null),"\nTherefore, we cut (A..B) into (A..P) and (P..B).")),Object(r.b)("p",null,"Angle displacement at a point is defined as the signed angle differences accumulated from the previous splice point (exclusive) to the current point (inclusive). If the absolute value of angle displacement at a certain point exceeds a specific threshold, that point is a splice point. The smaller the threshold, the more curves are cut, and the resulting spline is more accurate."),Object(r.b)(s.a,{src:"vtracer/AngleDisplacement.svg",text:"Angle Displacements shown along a path.",mdxType:"Figure"}),Object(r.b)("p",null,"Once all splice points are found, VTracer feeds all subpaths between every consecutive pair of splice points into the curve-fitter."),Object(r.b)("p",null,"If the smoothed path from the previous step is fed into the curve-fitter, we get a spline like the following:"),Object(r.b)(s.a,{src:"vtracer/PipelineShowcase/Curve-fitted.png",text:"Final output",height:"200px",mdxType:"Figure"}),Object(r.b)("h2",{id:"vs-potrace"},"vs Potrace"),Object(r.b)("h3",{id:"fidelity"},"Fidelity"),Object(r.b)("p",null,Object(r.b)("a",{href:"http://potrace.sourceforge.net/",parentName:"p"},"Potrace")," is a popular bitmap tracing tool that also transforms bitmaps into vector graphics. Being able to produce high-quality output for low-resolution images, Potrace traces images by finding global optimal under certain assumptions. VTracer favours fidelity over simplification. Potrace and VTracer produce different results especially on small objects."),Object(r.b)(s.a,{src:"vtracer/VSPotraceCorner.svg",mdxType:"Figure"}),Object(r.b)("h6",{style:{textAlign:"center"}},Object(r.b)("p",null,"Illustration of how assumptions affect tracing.\n",Object(r.b)("br",null),"\nLeft: Original input.\n",Object(r.b)("br",null),"\nMiddle: Possible shape interpretation with the assumption that ambiguous “corners” in the original input are sharp corners.\n",Object(r.b)("br",null),"Right: Possible shape interpretation with no assumptions: “corners” in the original image are represented by curves or round corners.")),Object(r.b)("h3",{id:"efficiency"},"Efficiency"),Object(r.b)("p",null,"Potrace finds the global optimal way of tracing a shape, meaning it approximates parts using information from the entire shape, which leads to performance issues in high-resolution images. On the other hand, VTracer runs a linear algorithm on each cluster and has lower CPU and memory usage. In fact, we regularly use VTracer to process high resolution scans at 10 megapixels."),Object(r.b)("h2",{id:"vs-adobe-illustrator"},"vs Adobe Illustrator"),Object(r.b)("p",null,"Comparing to Adobe Illustrator's Live Trace, VTracer's output is much more compact thanks to a stacking strategy. VTracer's preprocessing stage utilizes Vision Cortex's image tree algorithm and never produces shapes with holes."))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/vtracer.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-vtracer-mdx-eb117a97b4b1e4f1e0e8.js.map