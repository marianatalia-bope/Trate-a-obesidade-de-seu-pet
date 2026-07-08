import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Lock, ShieldCheck, CreditCard, QrCode, Sparkles, Dog, Cat } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productPrice: number;
}

export default function CheckoutModal({ isOpen, onClose, productPrice }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) return;
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleReset = () => {
    setStep('form');
    setPetName('');
    setBuyerName('');
    setBuyerEmail('');
    setCardNumber('');
    setCardExpiry('');
    setCardCvv('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100/60 bg-[#FDFCF8] px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Checkout Seguro PetLeve</h3>
                <p className="text-xs text-green-700 flex items-center gap-1">
                  <Lock className="h-3 w-3" /> Ambiente 100% seguro
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 max-h-[80vh] overflow-y-auto bg-white">
            {step === 'form' && (
              <form onSubmit={handlePay} className="space-y-4">
                {/* Product Summary Mini Badge */}
                <div className="rounded-xl bg-amber-50/50 border border-amber-100/50 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-amber-100/50 flex items-center justify-center text-amber-500">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-slate-900">Método PetLeve Completo</p>
                      <p className="text-[10px] text-slate-500">Acesso Vitalício + Todos os Bônus</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 line-through">R$ 197,00</p>
                    <p className="font-bold text-sm text-amber-500">R$ {productPrice.toFixed(2).replace('.', ',')}</p>
                  </div>
                </div>

                {/* Pet Information */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">Sobre o seu Pet (Para personalizar o material):</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPetType('dog')}
                      className={`flex items-center justify-center gap-2 rounded-lg border p-2.5 text-xs font-medium transition-all ${
                        petType === 'dog'
                          ? 'border-amber-500 bg-amber-50 text-amber-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Dog className="h-4 w-4" /> É um Cãozinho
                    </button>
                    <button
                      type="button"
                      onClick={() => setPetType('cat')}
                      className={`flex items-center justify-center gap-2 rounded-lg border p-2.5 text-xs font-medium transition-all ${
                        petType === 'cat'
                          ? 'border-amber-500 bg-amber-50 text-amber-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Cat className="h-4 w-4" /> É um Gatinho
                    </button>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nome do seu pet (ex: Luke, Mel)"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Buyer Information */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-semibold text-slate-700">Seus Dados de Acesso:</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail (envio imediato do guia)"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Payment Methods */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-semibold text-slate-700">Forma de Pagamento:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`flex items-center justify-center gap-2 rounded-lg border p-2.5 text-xs font-medium transition-all ${
                        paymentMethod === 'pix'
                          ? 'border-amber-500 bg-amber-50 text-amber-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="h-4 w-4 text-emerald-700" /> Pix (Acesso Imediato)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex items-center justify-center gap-2 rounded-lg border p-2.5 text-xs font-medium transition-all ${
                        paymentMethod === 'card'
                          ? 'border-amber-500 bg-amber-50 text-amber-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <CreditCard className="h-4 w-4" /> Cartão de Crédito
                    </button>
                  </div>

                  {paymentMethod === 'card' ? (
                    <div className="space-y-2 rounded-lg bg-slate-50 p-3 border border-slate-100">
                      <input
                        type="text"
                        placeholder="Número do Cartão"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').substring(0, 16))}
                        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Validade (MM/AA)"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value.substring(0, 5))}
                          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').substring(0, 4))}
                          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg bg-green-50/60 border border-green-100 p-3 text-center">
                      <p className="text-[11px] text-green-800 font-medium">
                        ✨ Desconto Pix Ativo: Liberação imediata em menos de 10 segundos no seu e-mail!
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-amber-500 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-amber-600 hover:shadow-amber-200 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Concluir Inscrição por R$ {productPrice.toFixed(2).replace('.', ',')}
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-700" /> Compra Segura
                  </span>
                  <span>•</span>
                  <span>Acesso Imediato</span>
                  <span>•</span>
                  <span>Garantia de 7 Dias</span>
                </div>
              </form>
            )}

            {step === 'processing' && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-100 border-t-amber-500" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Processando sua transação segura...</h4>
                  <p className="text-xs text-slate-500">Criptografando dados e gerando seu acesso ao PetLeve.</p>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="flex flex-col items-center text-center py-6 space-y-4 bg-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Inscrição Confirmada! 🎉</h3>
                  <p className="text-xs text-green-700 font-medium">Parabéns, seu pet vai agradecer por este cuidado!</p>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto pt-2">
                    Enviamos um e-mail de boas-vindas com o link para download do seu <strong>Guia PetLeve</strong> e todos os 3 bônus exclusivos.
                  </p>
                </div>

                {petName && (
                  <div className="w-full max-w-xs rounded-xl bg-amber-50 border border-amber-200/60 p-3 mt-2">
                    <p className="text-xs text-amber-900 font-semibold flex items-center justify-center gap-1.5">
                      {petType === 'dog' ? <Dog className="h-4 w-4 text-amber-700" /> : <Cat className="h-4 w-4 text-amber-700" />}
                      Especial para o seu amado {petName}!
                    </p>
                    <p className="text-[10px] text-amber-800 mt-1">
                      O plano personalizado foi adaptado para {petType === 'dog' ? 'o seu cãozinho' : 'a sua gatinha'}!
                    </p>
                  </div>
                )}

                <div className="w-full pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-[10px] text-slate-400">Código da transação: #PL-{Math.floor(Math.random() * 900000 + 100000)}</p>
                  <button
                    onClick={handleReset}
                    className="w-full rounded-lg bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Começar a Ler Agora
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
