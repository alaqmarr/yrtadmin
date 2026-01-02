import TestimonialForm from "@/components/TestimonialForm";
import { getTestimonialAction } from "@/app/actions/testimonial.server";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const testimonial = await getTestimonialAction(id);

    if (!testimonial) {
        return <div>Testimonial not found</div>;
    }

    return (
        <div className="p-2 md:p-6">
            <TestimonialForm id={id} initialData={testimonial} />
        </div>
    );
}
