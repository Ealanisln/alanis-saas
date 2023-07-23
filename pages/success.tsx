import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';



const SuccessPage = () => {
  const router = useRouter();
  const { status } = router.query;
  console.log(status)
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionData = async () => {
      if (router.query.session_id) {
        try {
          const sessionId = router.query.session_id as string;
          const response = await fetch(`/api/get-session?session_id=${sessionId}`);
          const data = await response.json();
          setPaymentStatus(data.payment_status);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching session data:', error);
          setLoading(false);
        }
      }
    };
    fetchSessionData();
  }, [router.query.session_id]);

  return (
    <div>
       {status && status === "success" && (
          <div className="bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700">
            Payment Successful
          </div>
        )}
        {status && status === "cancel" && (
          <div className="bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700">
            Payment Unsuccessful
          </div>
        )}
    </div>
  );
};

export default SuccessPage;
